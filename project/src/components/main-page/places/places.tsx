import { useSelector } from 'react-redux';
import { getCurrentSort, getHoveredHotel } from '../../../store/app-process/selectors';
import { City } from '../../../types/city';
import { Hotel } from '../../../types/hotel';
import MapComponent from '../../map-component/map-component';
import PlacesList from '../../places-list/places-list';
import PlacesSorting from '../../places-sorting/places-sorting';
import NoPlaces from './no-places';

type PlacesProps = {
  city: City,
  offers: Hotel[],
}

function Places({city, offers}: PlacesProps): JSX.Element {
  const currentSort = useSelector(getCurrentSort);
  const hoveredHotel = useSelector(getHoveredHotel);
  if (offers.length === 0) {
    return <NoPlaces city={city} />;
  }

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{`${offers.length} places to stay in ${city.name}`}</b>
        <PlacesSorting />
        <PlacesList offers={offers} className="cities__places-list" classNameCard="cities__place-card" />
      </section>
      <div className="cities__right-section">
        <MapComponent city={city} offers={offers} selectedOffer={hoveredHotel} className="cities__map"/>
      </div>
    </div>
  );
}

export default Places;
