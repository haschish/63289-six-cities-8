import { NameSpace, RootState } from "../reducer";

export const getCurrentCity = (state: RootState) => state[NameSpace.AppProcess].currentCity;

export const getCurrentSort = (state: RootState) => state[NameSpace.AppProcess].currentSort;

export const getHoveredHotel = (state: RootState) => state[NameSpace.AppProcess].hoveredHotel;
