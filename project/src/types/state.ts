import { AuthStatus, OfferStatus, ResourceStatus } from '../const';
import { Hotel } from './hotel';
import { Review } from './review';
import { Sort } from './sort';
import { AuthInfo } from './user';

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
}
