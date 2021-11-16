import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { changeCity, changeSort, deleteFavorite, fetchAuthInfo, hoverHotel, loadFavorites, loadNearbyOffers, loadOffer, loadOffers, loadReviews, redirectToRoute, requireAuthorization, requireLogout, sendReview, updateOffer} from '../store/action';
import { State } from './state';

export enum ActionType {
  RequireAuthorization = 'app/requireAuthorization',
  ChangeCity = 'app/changeCity',
  ChangeSort = 'app/changeSort',
  HoverHotel = 'app/hoverHotel',
  RedirectToRoute = 'app/redirectToRoute',
  RequireLogout = 'app/requireLogout',
  LoadOffers = 'data/loadOffers',
  LoadOffer = 'data/loadOffer',
  UpdateOffer = 'data/updateOffer',
  LoadReviews = 'data/loadReviews',
  LoadNearbyOffers = 'data/loadNearbyOffers',
  FetchAuthInfo = 'data/fetchAuthInfo',
  SendReview = 'data/sendReview',
  LoadFavorites = 'data/loadFavorites',
  DeleteFavorite = 'data/deleteFavorite',
}

export type Actions =
  ReturnType<typeof changeCity> |
  ReturnType<typeof changeSort> |
  ReturnType<typeof hoverHotel> |
  ReturnType<typeof loadOffers> |
  ReturnType<typeof loadOffer> |
  ReturnType<typeof updateOffer> |
  ReturnType<typeof loadReviews> |
  ReturnType<typeof loadNearbyOffers> |
  ReturnType<typeof requireAuthorization> |
  ReturnType<typeof fetchAuthInfo> |
  ReturnType<typeof redirectToRoute> |
  ReturnType<typeof requireLogout> |
  ReturnType<typeof sendReview> |
  ReturnType<typeof loadFavorites> |
  ReturnType<typeof deleteFavorite> ;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
