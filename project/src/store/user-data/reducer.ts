import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus } from '../../const';
import { UserProcessState } from '../../types/state';
import { requireAuthorization, requireLogout } from './action';

const initialState: UserProcessState = {
  authStatus: AuthStatus.Unknown,
  authInfo: undefined,
};

const userDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload.status;
      state.authInfo = action.payload.authInfo;
    })
    .addCase(requireLogout, (state) => {
      state.authStatus = AuthStatus.NoAuthorized;
      state.authInfo = undefined;
    });
});

export default userDataReducer;
