import { AuthStatus } from "../../const";
import { Actions, ActionType } from "../../types/action";
import { UserProcessState } from "../../types/state";

const initialState: UserProcessState = {
  authStatus: AuthStatus.Unknown,
  authInfo: undefined,
};

const userDataReducer = (state: UserProcessState = initialState, action: Actions): UserProcessState => {
  switch(action.type) {
    case ActionType.RequireAuthorization: return {...state, authStatus: action.payload.status, authInfo: action.payload.authInfo};
    case ActionType.RequireLogout: return {...state, authStatus: AuthStatus.NoAuthorized, authInfo: undefined};
    default: return state;
  }
};

export default userDataReducer;
