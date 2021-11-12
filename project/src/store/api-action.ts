import axios from 'axios';
import { APIRoute, AppRoute, AuthStatus, ResourceStatus } from '../const';
import { AuthInfoFromServer, convertAuthInfoToClient, convertHotelToClient, convertReviewToClient, HotelFromServer } from '../server/adapter';
import { dropToken, saveToken } from '../server/token';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { ReviewFromServer } from '../types/review';
import { loadNearbyOffers, loadOffer, loadOffers, loadReviews, redirectToRoute, requireAuthorization, requireLogout, sendReview } from './action';


export const fetchOffersAction = (): ThunkActionResult =>
  async(dispatch, _getState, api): Promise<void> => {

    const {data} = await api.get<HotelFromServer[]>(APIRoute.Offers);
    dispatch(loadOffers(ResourceStatus.Loaded, data.map((it) => convertHotelToClient(it))));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async(dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<AuthInfoFromServer>(APIRoute.Login);
    dispatch(requireAuthorization(AuthStatus.Authorized, convertAuthInfoToClient(data)));
  };

export const loginAction = ({email, password}: AuthData): ThunkActionResult =>
  async(dispatch, _getState, api) => {
    const {data} = await api.post<AuthInfoFromServer>(APIRoute.Login, {email, password});
    const authInfo = convertAuthInfoToClient(data);
    saveToken(authInfo.token);
    dispatch(requireAuthorization(AuthStatus.Authorized, authInfo));
    dispatch(redirectToRoute(AppRoute.Main));
  };

export const logoutAction = (): ThunkActionResult =>
  async(dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export const fetchOfferAction = (id: number): ThunkActionResult =>
  async(dispatch, _getState, api) => {
    try {
      dispatch(loadOffer(ResourceStatus.Loading));
      const {data} = await api.get<HotelFromServer>(`/hotels/${id}`);
      dispatch(loadOffer(ResourceStatus.Loaded, convertHotelToClient(data)));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchNearbyAction(id));
    } catch (e) {
      if (axios.isAxiosError(e) && e.response?.status === 404) {
        dispatch(loadOffer(ResourceStatus.NotFound));
      }
      dispatch(loadOffer(ResourceStatus.Error));
    }
  };

export const fetchReviewsAction = (id: number): ThunkActionResult =>
  async(dispatch, _getState, api) => {
    try {
      dispatch(loadReviews(ResourceStatus.Loading));
      const {data} = await api.get<ReviewFromServer[]>(`/comments/${id}`);
      dispatch(loadReviews(ResourceStatus.Loaded, data.map((it) => convertReviewToClient(it))));
    } catch (e) {
      dispatch(loadReviews(ResourceStatus.Error));
    }
  };

export const fetchNearbyAction = (id: number): ThunkActionResult =>
  async(dispatch, _getState, api) => {
    try {
      dispatch(loadNearbyOffers(ResourceStatus.Loading));
      const {data} = await api.get<HotelFromServer[]>(`/hotels/${id}/nearby`);
      dispatch(loadNearbyOffers(ResourceStatus.Loaded, data.map((it) => convertHotelToClient(it))));
    } catch (e) {
      dispatch(loadNearbyOffers(ResourceStatus.Error));
      // dispatch()
    }
  };

export const addReviewAction = (id: number, comment: string, rating: number): ThunkActionResult =>
  async(dispatch, _getState, api) => {
    try {
      dispatch(sendReview(ResourceStatus.Loading));
      const {data} = await api.post<ReviewFromServer[]>(`/comments/${id}`, {comment, rating});
      dispatch(sendReview(ResourceStatus.Loaded));
      dispatch(loadReviews(ResourceStatus.Loaded, data.map((it) => convertReviewToClient(it))));
    } catch (e) {
      dispatch(sendReview(ResourceStatus.Error));
    }
  };
