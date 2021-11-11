import { AuthStatus, OfferStatus, ResourceStatus } from '../const';
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
}

export type AppProcessState = {
  currentCity: string,
  currentSort: Sort,
  hoveredHotel?: Hotel,
}

export type UserProcessState = {
  authStatus: AuthStatus,
  authInfo?: AuthInfo,
}

export type State = {
  currentCity: string,
  offers: Hotel[],
  loadingOffers: boolean,
  currentSort: Sort,
  hoveredHotel?: Hotel,
  authStatus: AuthStatus,
  authInfo?: AuthInfo,
  offer?: Hotel,
  offerStatus: OfferStatus,
  reviews: Review[],
  reviewsStatus: ResourceStatus,
  nearbyOffers: Hotel[],
  nearbyOffersStatus: ResourceStatus,
  reviewStatus: ResourceStatus,
}
