import { AppRoute, AuthStatus, ResourceStatus } from '../const';
import { ActionType } from '../types/action';
import { City } from '../types/city';
import { Hotel } from '../types/hotel';
import { Review } from '../types/review';
import { Sort } from '../types/sort';
import { AuthInfo } from '../types/user';

export const changeCity = (city: City) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const changeSort = (sort: Sort) => ({
  type: ActionType.ChangeSort,
  payload: sort,
} as const);

export const hoverHotel = (hotel?: Hotel) => ({
  type: ActionType.HoverHotel,
  payload: hotel,
} as const);

export const loadOffers = (status: ResourceStatus, offers: Hotel[] = []) => ({
  type: ActionType.LoadOffers,
  status,
  offers,
} as const);

export const requireAuthorization = (status: AuthStatus, authInfo?: AuthInfo) => ({
  type: ActionType.RequireAuthorization,
  payload: {
    status,
    authInfo,
  },
} as const);

export const fetchAuthInfo = (authInfo: AuthInfo) => ({
  type: ActionType.FetchAuthInfo,
  payload: authInfo,
} as const);

export const redirectToRoute = (route: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: route,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const loadOffer = (status: ResourceStatus, offer?: Hotel) => ({
  type: ActionType.LoadOffer,
  payload: {
    status,
    offer,
  },
} as const);

export const loadReviews = (status: ResourceStatus, reviews: Review[] = []) => ({
  type: ActionType.LoadReviews,
  payload: {
    status,
    reviews,
  },
} as const);

export const loadNearbyOffers = (status: ResourceStatus, offers: Hotel[] = []) => ({
  type: ActionType.LoadNearbyOffers,
  payload: {
    status,
    offers,
  },
} as const);

export const sendReview = (status: ResourceStatus) => ({
  type: ActionType.SendReview,
  payload: status,
} as const);

export const updateOffer = (offer: Hotel) => ({
  type: ActionType.UpdateOffer,
  payload: offer,
} as const);

export const loadFavorites = (status: ResourceStatus, offers: Hotel[] = []) => ({
  type: ActionType.LoadFavorites,
  status,
  offers,
} as const);

export const deleteFavorite = (offer: Hotel) => ({
  type: ActionType.DeleteFavorite,
  offer,
} as const);
