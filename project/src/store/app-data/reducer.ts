import { ResourceStatus } from "../../const";
import { Actions, ActionType } from "../../types/action";
import { AppDataState } from "../../types/state";

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
};

const appDataReducer = (state: AppDataState = initialState, action: Actions): AppDataState => {
  switch(action.type) {
    case ActionType.LoadOffers: return {...state, offersStatus: action.status, offers: action.offers};
    case ActionType.LoadOffer: return {...state, offerStatus: action.payload.status, offer: action.payload.offer};
    case ActionType.LoadReviews: return {...state, reviewsStatus: action.payload.status, reviews: action.payload.reviews};
    case ActionType.LoadNearbyOffers: return {...state, nearbyOffersStatus: action.payload.status, nearbyOffers: action.payload.offers};
    case ActionType.SendReview: return {...state, reviewStatus: action.payload};
    default: return state;
  }
};

export default appDataReducer;
