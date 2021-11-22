import { createSelector } from 'reselect';
import { MAX_REVIEWS } from '../../const';
import { getCurrentCity, getCurrentSort } from '../app-process/selectors';
import { NameSpace, RootState } from '../reducer';

export const getOffers = (state: RootState) => state[NameSpace.AppData].offers;

export const getOffersStatus = (state: RootState) => state[NameSpace.AppData].offersStatus;

const getFilteredOffersByCity = createSelector(
  getOffers,
  getCurrentCity,
  (offers, currentCity) => offers.filter((it) => it.city.name === currentCity.name),
);

export const getPreparedOffers = createSelector(
  getFilteredOffersByCity,
  getCurrentSort,
  (filteredOffers, currentSort) => {
    switch(currentSort) {
      case 'popular': return filteredOffers.slice();
      case 'price-asc': return filteredOffers.slice().sort((a, b) => a.price - b.price);
      case 'price-desc': return filteredOffers.slice().sort((a, b) => b.price - a.price);
      case 'top-rated-first': return filteredOffers.slice().sort((a, b) => b.rating - a.rating);
    }
  }
);

export const getOffer = (state: RootState) => state[NameSpace.AppData].offer;

export const getOfferStatus = (state: RootState) => state[NameSpace.AppData].offerStatus;

export const getReviews = (state: RootState) => state[NameSpace.AppData].reviews;

export const getPreparedReviews = createSelector(
  getReviews,
  (reviews) => reviews.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, MAX_REVIEWS),
)

export const getNearbyOffers = (state: RootState) => state[NameSpace.AppData].nearbyOffers;

export const getReviewStatus = (state: RootState) => state[NameSpace.AppData].reviewStatus;

export const getFavoriteOffers = (state: RootState) => state[NameSpace.AppData].favoriteOffers;

export const getFavoriteOffersStatus = (state: RootState) => state[NameSpace.AppData].favoriteOffersStatus;
