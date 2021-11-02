import { ActionType, ChangeCityAction, ChangeSortAction, HoverHotelAction } from '../types/action';
import { Hotel } from '../types/hotel';
import { Sort } from '../types/sort';

export const changeCity = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const changeSort = (sort: Sort): ChangeSortAction => ({
  type: ActionType.ChangeSort,
  payload: sort,
});

export const hoverHotel = (hotel?: Hotel): HoverHotelAction => ({
  type: ActionType.HoverHotel,
  payload: hotel,
});
