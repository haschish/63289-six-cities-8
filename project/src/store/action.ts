import { AppRoute, AuthStatus } from '../const';
import { ActionType } from '../types/action';
import { Hotel } from '../types/hotel';
import { Sort } from '../types/sort';
import { AuthInfo } from '../types/user';

export const changeCity = (city: string) => ({
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

export const loadOffers = (offers: Hotel[]) => ({
  type: ActionType.LoadOffers,
  payload: offers,
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
