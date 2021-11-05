import { APIRoute } from '../const';
import { convertHotelToClient, HotelFromServer } from '../server/adapter';
import { ThunkActionResult } from '../types/action';
import { loadOffers } from './action';


export const fetchOffersAction = (): ThunkActionResult =>
  async(dispatch, _getState, api): Promise<void> => {

    const {data} = await api.get<HotelFromServer[]>(APIRoute.Offers);
    dispatch(loadOffers(data.map((it) => convertHotelToClient(it))));
  };

