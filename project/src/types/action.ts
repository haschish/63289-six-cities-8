import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { changeCity, changeSort, hoverHotel, loadOffers } from '../store/action';
import { State } from './state';

export enum ActionType {
  ChangeCity = 'app/changeCity',
  ChangeSort = 'app/changeSort',
  HoverHotel = 'app/hoverHotel',
  LoadOffers = 'data/loadOffers',
}

export type Actions =
  ReturnType<typeof changeCity> |
  ReturnType<typeof changeSort> |
  ReturnType<typeof hoverHotel> |
  ReturnType<typeof loadOffers>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
