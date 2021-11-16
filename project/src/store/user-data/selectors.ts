import { NameSpace, RootState } from '../reducer';

export const getAuthStatus = (state: RootState) => state[NameSpace.UserData].authStatus;

export const getAuthInfo = (state: RootState) => state[NameSpace.UserData].authInfo;

