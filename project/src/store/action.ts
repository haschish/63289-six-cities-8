import { AppRoute } from '../const';
import { ActionType } from '../types/action';
import { AuthInfo } from '../types/user';

export const fetchAuthInfo = (authInfo: AuthInfo) => ({
  type: ActionType.FetchAuthInfo,
  payload: authInfo,
} as const);

export const redirectToRoute = (route: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: route,
} as const);

