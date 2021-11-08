import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import reducer from './store/reducer';
import thunk from 'redux-thunk';
import { createAPI } from './server/api';
import { ThunkAppDispatch } from './types/action';
import { checkAuthAction, fetchOffersAction } from './store/api-action';
import { requireAuthorization } from './store/action';
import { AuthStatus } from './const';
import {composeWithDevTools} from 'redux-devtools-extension';
import { redirect } from './store/middlewares/redirect';

const api = createAPI(() => store.dispatch(requireAuthorization(AuthStatus.NoAuthorized)));
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

