import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { changeCity, changeSort, fetchAuthInfo, hoverHotel, loadNearbyOffers, loadOffer, loadOffers, loadReviews, redirectToRoute, requireAuthorization, requireLogout, sendReview } from '../store/action';
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
  LoadReviews = 'data/loadReviews',
  LoadNearbyOffers = 'data/loadNearbyOffers',
  FetchAuthInfo = 'data/fetchAuthInfo',
  SendReview = 'data/sendReview',
}

export type Actions =
  ReturnType<typeof changeCity> |
  ReturnType<typeof changeSort> |
  ReturnType<typeof hoverHotel> |
  ReturnType<typeof loadOffers> |
  ReturnType<typeof loadOffer> |
  ReturnType<typeof loadReviews> |
  ReturnType<typeof loadNearbyOffers> |
  ReturnType<typeof requireAuthorization> |
  ReturnType<typeof fetchAuthInfo> |
  ReturnType<typeof redirectToRoute> |
  ReturnType<typeof requireLogout> |
  ReturnType<typeof sendReview> ;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
