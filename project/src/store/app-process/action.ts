import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../../types/action';
import { City } from '../../types/city';
import { Hotel } from '../../types/hotel';
import { Sort } from '../../types/sort';

export const changeCity = createAction(
  ActionType.ChangeCity,
  (city: City) => ({
    payload: city,
  }),
);

export const changeSort = createAction(
  ActionType.ChangeSort,
  (sort: Sort) => ({
    payload: sort,
  }),
);

export const hoverHotel = createAction(
  ActionType.HoverHotel,
  (hotel?: Hotel) => ({
    payload: hotel,
  }),
);
