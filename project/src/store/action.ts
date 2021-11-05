import { ActionType } from '../types/action';
import { Hotel } from '../types/hotel';
import { Sort } from '../types/sort';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const changeSort = (sort: Sort) => ({
  type: ActionType.ChangeSort,
  payload: sort,
} as const);

export const hoverHotel = (hotel?: Hotel) => ({
  type: ActionType.HoverHotel,
  payload: hotel,
} as const);

export const loadOffers = (offers: Hotel[]) => ({
  type: ActionType.LoadOffers,
  payload: offers,
} as const);
