import { Hotel } from './hotel';
import { Sort } from './sort';

export type State = {
  currentCity: string,
  offers: Hotel[],
  loadingOffers: boolean,
  currentSort: Sort,
  hoveredHotel?: Hotel,
}
