import { AuthStatus, ResourceStatus } from '../const';
import { RootState } from '../store/reducer';
import { City } from './city';
import { Hotel } from './hotel';
import { Review } from './review';
import { Sort } from './sort';
import { AuthInfo } from './user';

export type AppDataState = {
  offers: Hotel[],
  offersStatus: ResourceStatus,
  loadingOffers: boolean,
  offer?: Hotel,
  offerStatus: ResourceStatus,
  reviews: Review[],
  reviewsStatus: ResourceStatus,
  nearbyOffers: Hotel[],
  nearbyOffersStatus: ResourceStatus,
  reviewStatus: ResourceStatus,
  favoriteOffers: Hotel[],
  favoriteOffersStatus: ResourceStatus,
}

export type AppProcessState = {
  currentCity: City,
  currentSort: Sort,
  hoveredHotel?: Hotel,
}

export type UserProcessState = {
  authStatus: AuthStatus,
  authInfo?: AuthInfo,
}

export type State = RootState;
