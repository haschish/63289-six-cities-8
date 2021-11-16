import Header from '../header/header';
import LocationsList from './locations-list/locations-list';
import { cities } from '../../const';
import { useSelector } from 'react-redux';
import { getPreparedOffers } from '../../store/app-data/selectors';
import { getCurrentCity } from '../../store/app-process/selectors';
import Places from './places/places';
import NoPlaces from './no-places/no-places';
import classNames from 'classnames';

function MainPage(): JSX.Element {
  const filteredOffers = useSelector(getPreparedOffers);
  const currentCity = useSelector(getCurrentCity);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={classNames('page__main page__main--index', {'page__main--index-empty': filteredOffers.length === 0})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList locations={cities}/>
          </section>
        </div>
        <div className="cities">
          {filteredOffers.length ? <Places offers={filteredOffers} city={currentCity} /> : <NoPlaces city={currentCity} />}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
