import Map from '../map/map';
import Header from '../header/header';
import PlacesList from '../places-list/places-list';
import LocationsList from './locations-list/locations-list';
import { cities } from '../../const';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';


type MainPageProps = {
};

const mapStateToProps = ({currentCity, offers}: State) => ({
  currentCity,
  offers,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ComponentProps = PropsFromRedux & MainPageProps;

function MainPage({offers, currentCity}: ComponentProps): JSX.Element {
  const filteredOffers = offers.filter((it) => it.city.name === currentCity);

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
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
