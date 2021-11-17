import { createReducer } from '@reduxjs/toolkit';
import { cities } from '../../const';
import { AppProcessState } from '../../types/state';
import { changeCity, changeSort, hoverHotel } from './action';

const initialState: AppProcessState = {
  currentCity: cities[0],
  currentSort: 'popular',
  hoveredHotel: undefined,
};

const appProcessReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(hoverHotel, (state, action) => {
      state.hoveredHotel = action.payload;
    });
});

export default appProcessReducer;
