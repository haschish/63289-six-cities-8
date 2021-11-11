import { Actions, ActionType } from "../../types/action";
import { AppProcessState } from "../../types/state";

const initialState: AppProcessState = {
  currentCity: 'Paris',
  currentSort: 'popular',
  hoveredHotel: undefined,
};

const appProcessReducer = (state: AppProcessState = initialState, action: Actions): AppProcessState => {
  switch(action.type) {
    case ActionType.ChangeCity: return {...state, currentCity: action.payload};
    case ActionType.ChangeSort: return {...state, currentSort: action.payload};
    case ActionType.HoverHotel: return {...state, hoveredHotel: action.payload};
    default: return state;
  }
};

export default appProcessReducer;
