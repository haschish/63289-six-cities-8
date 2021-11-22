import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
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
  SendReview = 'data/sendReview',
  LoadFavorites = 'data/loadFavorites',
  DeleteFavorite = 'data/deleteFavorite',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
