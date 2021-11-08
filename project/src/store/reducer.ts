import { AuthStatus } from '../const';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState: State = {
  currentCity: 'Paris',
  offers: [],
  loadingOffers: true,
  currentSort: 'popular',
  hoveredHotel: undefined,
  authStatus: AuthStatus.Unknown,
  authInfo: undefined,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch(action.type) {
    case ActionType.ChangeCity: return {...state, currentCity: action.payload};
    case ActionType.ChangeSort: return {...state, currentSort: action.payload};
    case ActionType.HoverHotel: return {...state, hoveredHotel: action.payload};
    case ActionType.LoadOffers: return {...state, offers: action.payload, loadingOffers: false};
    case ActionType.RequireAuthorization: return {...state, authStatus: action.payload.status, authInfo: action.payload.authInfo};
    case ActionType.RequireLogout: return {...state, authStatus: AuthStatus.NoAuthorized, authInfo: undefined};
    default: return state;
  }
};

export default reducer;
