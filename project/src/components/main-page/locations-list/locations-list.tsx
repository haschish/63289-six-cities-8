import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../../../store/app-process/action';
import { getCurrentCity } from '../../../store/app-process/selectors';
import { City } from '../../../types/city';
import LocationsItem from './locations-item';

type LocationsListProps = {
  locations: City[],
}

function LocationsList({locations}: LocationsListProps): JSX.Element {
  const currentCity = useSelector(getCurrentCity);

  const dispatch = useDispatch();

  return (
    <ul className="locations__list tabs__list">
      {locations.map((it) => <LocationsItem key={`locations-item-${it.name}`} name={it.name} isActive={it === currentCity} onClick={() => dispatch(changeCity(it))}/>)}
    </ul>
  );
}

export default LocationsList;
