import { combineReducers } from 'redux';
import { AuthStatus, OfferStatus, ResourceStatus } from '../const';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';
import appDataReducer from './app-data/reducer';
import appProcessReducer from './app-process/reducer';
import userDataReducer from './user-data/reducer';


const initialState: State = {
  currentCity: 'Paris',
  offers: [],
  loadingOffers: true,
  currentSort: 'popular',
  hoveredHotel: undefined,
  authStatus: AuthStatus.Unknown,
  authInfo: undefined,
  offerStatus: OfferStatus.Unknown,
  reviews: [],
  reviewsStatus: ResourceStatus.Unknown,
  nearbyOffers: [],
  nearbyOffersStatus: ResourceStatus.Unknown,
  reviewStatus: ResourceStatus.Unknown,
};

export enum NameSpace {
  AppData = 'AppData',
  AppProcess = 'AppProcess',
  UserData = 'UserData',
}

const reducer = combineReducers({
  [NameSpace.AppData]: appDataReducer,
  [NameSpace.AppProcess]: appProcessReducer,
  [NameSpace.UserData]: userDataReducer,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
