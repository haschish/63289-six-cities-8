import { Hotel } from './hotel';
import { Sort } from './sort';

export enum ActionType {
  ChangeCity = 'app/changeCity',
  ChangeSort = 'app/changeSort',
  HoverHotel = 'app/hoverHotel',
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity,
  payload: string,
}

export type ChangeSortAction = {
  type: ActionType.ChangeSort,
  payload: Sort,
}

export type HoverHotelAction = {
  type: ActionType.HoverHotel,
  payload?: Hotel,
}

export type Actions = ChangeCityAction | ChangeSortAction | HoverHotelAction;
