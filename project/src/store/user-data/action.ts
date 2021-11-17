import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from '../../const';
import { ActionType } from '../../types/action';
import { AuthInfo } from '../../types/user';

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (status: AuthStatus, authInfo?: AuthInfo) => ({
    payload: {
      status,
      authInfo,
    },
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);
