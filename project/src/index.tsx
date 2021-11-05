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
import { fetchOffersAction } from './store/api-action';

const api = createAPI();
const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(api)),
);

(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

