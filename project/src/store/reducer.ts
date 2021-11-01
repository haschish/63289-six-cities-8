import { offers } from '../mocks/offers';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState: State = {
  currentCity: 'Paris',
  offers: offers,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch(action.type) {
    case ActionType.ChangeCity: return {...state, currentCity: action.payload};
    default: return state;
  }
};

export default reducer;
