import { AuthStatus } from '../const';
import { Hotel } from './hotel';
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
}
