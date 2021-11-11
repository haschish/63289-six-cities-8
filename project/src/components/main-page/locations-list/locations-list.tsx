import { Dispatch } from 'react';
import { connect, ConnectedProps, useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../../../store/action';
import { getCurrentCity } from '../../../store/app-process/selectors';
import { RootState } from '../../../store/reducer';
import { Actions } from '../../../types/action';
import { State } from '../../../types/state';
import LocationsItem from './locations-item';

type LocationsListProps = {
  locations: string[],
}

function LocationsList({locations}: LocationsListProps): JSX.Element {
  const currentCity = useSelector(getCurrentCity);

  const dispatch = useDispatch();

  return (
    <ul className="locations__list tabs__list">
      {locations.map((it) => <LocationsItem key={`locations-item-${it}`} name={it} isActive={it === currentCity} onClick={() => dispatch(changeCity(it))}/>)}
    </ul>
  );
}

export default LocationsList;
