import Map from '../map/map';
import Header from '../header/header';
import PlacesList from '../places-list/places-list';
import LocationsList from './locations-list/locations-list';
import { cities } from '../../const';
import { useSelector } from 'react-redux';
import PlacesSorting from '../places-sorting/places-sorting';
import { getFilteredAndSortOffers } from '../../store/app-data/selectors';
import { getCurrentCity } from '../../store/app-process/selectors';

function MainPage(): JSX.Element {
  const filteredOffers = useSelector(getFilteredAndSortOffers);
  const currentCity = useSelector(getCurrentCity);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList locations={cities}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${filteredOffers.length} places to stay in ${currentCity}`}</b>
              <PlacesSorting />
              <PlacesList offers={filteredOffers} className="cities__places-list" classNameCard="cities__place-card" />
            </section>
            <div className="cities__right-section">
              <Map offers={filteredOffers} className="cities__map"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
