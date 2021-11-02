import { offers } from '../mocks/offers';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState: State = {
  currentCity: 'Paris',
  offers: offers,
  currentSort: 'popular',
  hoveredHotel: undefined,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch(action.type) {
    case ActionType.ChangeCity: return {...state, currentCity: action.payload};
    case ActionType.ChangeSort: return {...state, currentSort: action.payload};
    case ActionType.HoverHotel: return {...state, hoveredHotel: action.payload};
    default: return state;
  }
};

export default reducer;
