import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import reducer from './store/reducer';
import { createAPI } from './server/api';
import { ThunkAppDispatch } from './types/action';
import { checkAuthAction, fetchOffersAction } from './store/api-action';
import { requireAuthorization } from './store/user-data/action';
import { AuthStatus } from './const';
import { redirect } from './store/middlewares/redirect';
import { configureStore } from '@reduxjs/toolkit';

const api = createAPI(() => store.dispatch(requireAuthorization(AuthStatus.NoAuthorized)));

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }).concat(redirect),
});

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

