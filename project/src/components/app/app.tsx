import MainPage from '../main-page/main-page';
import { Switch, Route, Router } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import PropertyPage from '../property-page/property-page';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, ResourceStatus } from '../../const';
import { Review } from '../../types/review';
import { State } from '../../types/state';
import { connect, ConnectedProps, useSelector } from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import browserHistory from '../../browser-history';
import { getOffers, getOffersStatus } from '../../store/app-data/selectors';

function App(): JSX.Element {

  const offersStatus = useSelector(getOffersStatus);
  const offers = useSelector(getOffers);
  if (offersStatus === ResourceStatus.Loading || offersStatus === ResourceStatus.Unknown) {
    return <LoadingScreen />;
  }

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainPage />
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <LoginPage />
        </Route>
        <PrivateRoute path={AppRoute.Favorites} exact redirect={AppRoute.SignIn}>
          <FavoritesPage offers={offers}/>
        </PrivateRoute>
        <Route path={AppRoute.Room}>
          <PropertyPage />
        </Route>
        <Route >
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
