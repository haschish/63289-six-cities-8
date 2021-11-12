import { createSelector } from 'reselect';
import { getCurrentCity, getCurrentSort } from '../app-process/selectors';
import { NameSpace, RootState } from '../reducer';

export const getOffers = (state: RootState) => state[NameSpace.AppData].offers;

export const getOffersStatus = (state: RootState) => state[NameSpace.AppData].offersStatus;

const getFilteredOffersByCity = createSelector(
  getOffers,
  getCurrentCity,
  (offers, currentCity) => offers.filter((it) => it.city.name === currentCity.name),
);

export const getPreparedOffers = (state: RootState) => {
  const filteredOffers = getFilteredOffersByCity(state);
  const currentSort = getCurrentSort(state);

  switch(currentSort) {
    case 'popular': return filteredOffers;
    case 'price-asc': return filteredOffers.sort((a, b) => a.price - b.price);
    case 'price-desc': return filteredOffers.sort((a, b) => b.price - a.price);
    case 'top-rated-first': return filteredOffers.sort((a, b) => b.rating - a.rating);
  }
};

export const getOffer = (state: RootState) => state[NameSpace.AppData].offer;

export const getOfferStatus = (state: RootState) => state[NameSpace.AppData].offerStatus;

export const getReviews = (state: RootState) => state[NameSpace.AppData].reviews;

export const getNearbyOffers = (state: RootState) => state[NameSpace.AppData].nearbyOffers;

export const getReviewStatus = (state: RootState) => state[NameSpace.AppData].reviewStatus;
