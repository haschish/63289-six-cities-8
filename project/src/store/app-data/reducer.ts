import { createReducer } from '@reduxjs/toolkit';
import { ResourceStatus } from '../../const';
import { AppDataState } from '../../types/state';
import { deleteFavorite, loadFavorites, sendReview } from './action';
import { loadNearbyOffers, loadOffer, loadOffers, loadReviews, updateOffer } from './action';

const initialState: AppDataState = {
  offers: [],
  offersStatus: ResourceStatus.Unknown,
  loadingOffers: true,
  offer: undefined,
  offerStatus: ResourceStatus.Unknown,
  reviews: [],
  reviewsStatus: ResourceStatus.Unknown,
  nearbyOffers: [],
  nearbyOffersStatus: ResourceStatus.Unknown,
  reviewStatus: ResourceStatus.Unknown,
  favoriteOffers: [],
  favoriteOffersStatus: ResourceStatus.Unknown,
};

const appDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offersStatus = action.payload.status;
      state.offers = action.payload.offers;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload.offer;
      state.offerStatus = action.payload.status;
    })
    .addCase(updateOffer, (state, action) => {
      const index = state.offers.findIndex((it) => it.id === action.payload.id);
      if (index !== -1) {
        state.offers[index] = action.payload;
      }
    })
    .addCase(loadReviews, (state, action) => {
      state.reviewStatus = action.payload.status;
      state.reviews = action.payload.reviews;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffersStatus = action.payload.status;
      state.nearbyOffers = action.payload.offers;
    })
    .addCase(sendReview, (state, action) => {
      state.reviewStatus = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favoriteOffersStatus = action.payload.status;
      state.favoriteOffers = action.payload.offers;
    })
    .addCase(deleteFavorite, (state, action) => {
      state.favoriteOffers = state.favoriteOffers.filter((it) => it.id !== action.payload.id);
    });
});

export default appDataReducer;
