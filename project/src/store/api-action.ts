import { APIRoute, AppRoute, AuthStatus } from '../const';
import { AuthInfoFromServer, convertAuthInfoToClient, convertHotelToClient, HotelFromServer } from '../server/adapter';
import { dropToken, saveToken } from '../server/token';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { loadOffers, redirectToRoute, requireAuthorization, requireLogout } from './action';


export const fetchOffersAction = (): ThunkActionResult =>
  async(dispatch, _getState, api): Promise<void> => {

    const {data} = await api.get<HotelFromServer[]>(APIRoute.Offers);
    dispatch(loadOffers(data.map((it) => convertHotelToClient(it))));
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

