import Map from '../map/map';
import Header from '../header/header';
import PlacesList from '../places-list/places-list';
import LocationsList from './locations-list/locations-list';
import { cities } from '../../const';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import PlacesSorting from '../places-sorting/places-sorting';
import { RootState } from '../../store/reducer';


type MainPageProps = {
};

const mapStateToProps = ({AppProcess, AppData}: RootState) => ({
  currentCity: AppProcess.currentCity,
  offers: AppData.offers,
  currentSort: AppProcess.currentSort,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ComponentProps = PropsFromRedux & MainPageProps;

function MainPage({offers, currentCity, currentSort}: ComponentProps): JSX.Element {
  const filteredOffers = offers.filter((it) => it.city.name === currentCity);

  switch(currentSort) {
    case 'popular': break;
    case 'price-asc': filteredOffers.sort((a, b) => a.price - b.price); break;
    case 'price-desc': filteredOffers.sort((a, b) => b.price - a.price); break;
    case 'top-rated-first': filteredOffers.sort((a, b) => b.rating - a.rating); break;
  }

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

export default connector(MainPage);
