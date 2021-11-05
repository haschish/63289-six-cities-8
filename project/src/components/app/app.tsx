import MainPage from '../main-page/main-page';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import PropertyPage from '../property-page/property-page';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthStatus } from '../../const';
import { Review } from '../../types/review';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';

type AppProps = {
  reviews: Review[],
}

const mapStateToProps = ({loadingOffers, offers}: State) => ({
  loadingOffers,
  offers,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ComponentProps = PropsFromRedux & AppProps;

function App({offers, reviews, loadingOffers}: ComponentProps): JSX.Element {
  if (loadingOffers) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainPage />
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <LoginPage />
        </Route>
        <PrivateRoute path={AppRoute.Favorites} exact authStatus={AuthStatus.Authorized} redirect={AppRoute.SignIn}>
          <FavoritesPage offers={offers}/>
        </PrivateRoute>
        <Route path={AppRoute.Room}
          exact
          render={(props) => <PropertyPage offer={offers[0]} reviews={reviews} />}
        >
        </Route>
        <Route >
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default connector(App);
