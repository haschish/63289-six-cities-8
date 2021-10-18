import MainPage from '../main-page/main-page';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import PropertyPage from '../property-page/property-page';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthStatus } from '../../const';
import { Hotel } from '../../types/hotel';

type AppProps = {
  offers: Hotel[],
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainPage offers={props.offers}/>
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <LoginPage />
        </Route>
        <PrivateRoute path={AppRoute.Favorites} exact authStatus={AuthStatus.Authorized} redirect={AppRoute.SignIn}>
          <FavoritesPage offers={props.offers}/>
        </PrivateRoute>
        <Route path={AppRoute.Room} exact>
          <PropertyPage />
        </Route>
        <Route >
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
