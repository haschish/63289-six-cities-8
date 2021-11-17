import { createAction } from '@reduxjs/toolkit';
import { ResourceStatus } from '../../const';
import { ActionType } from '../../types/action';
import { Hotel } from '../../types/hotel';
import { Review } from '../../types/review';

export const loadOffers = createAction(
  ActionType.LoadOffers,
  (status: ResourceStatus, offers: Hotel[] = []) => ({
    payload: {
      status,
      offers,
    },
  }),
);

export const loadOffer = createAction(
  ActionType.LoadOffer,
  (status: ResourceStatus, offer?: Hotel) => ({
    payload: {
      status,
      offer,
    },
  }),
);

export const updateOffer = createAction(
  ActionType.UpdateOffer,
  (offer: Hotel) => ({
    payload: offer,
  }),
);

export const loadReviews = createAction(
  ActionType.LoadReviews,
  (status: ResourceStatus, reviews: Review[] = []) => ({
    payload: {
      status,
      reviews,
    },
  }),
);

export const loadNearbyOffers = createAction(
  ActionType.LoadNearbyOffers,
  (status: ResourceStatus, offers: Hotel[] = []) => ({
    payload: {
      status,
      offers,
    },
  }),
);

export const sendReview = createAction(
  ActionType.SendReview,
  (status: ResourceStatus) => ({
    payload: status,
  }),
);

export const loadFavorites = createAction(
  ActionType.LoadFavorites,
  (status: ResourceStatus, offers: Hotel[] = []) => ({
    payload: {
      status,
      offers,
    },
  }),
);

export const deleteFavorite = createAction(
  ActionType.DeleteFavorite,
  (offer: Hotel) => ({
    payload: offer,
  }),
);
