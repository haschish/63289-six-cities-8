import { Sort } from './types/sort';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthStatus {
  Authorized = 'authorized',
  NoAuthorized = 'noAuthorized',
  Unknown = 'unknown',
}

export enum OfferStatus {
  Loading = 'loading',
  Loaded = 'loaded',
  NotFound = 'notFound',
  Error = 'error',
  Unknown = 'unknown',
}

export enum ResourceStatus {
  Loading = 'loading',
  Loaded = 'loaded',
  NotFound = 'notFound',
  Error = 'error',
  Unknown = 'unknown',
}

export const URL_PIN_DEFAULT = 'img/pin.svg';

export const URL_PIN_ACTIVE = 'img/pin-active.svg';

export const sortMap = new Map<Sort, string>([
  ['popular', 'Popular'],
  ['price-asc', 'Price: low to high'],
  ['price-desc', 'Price: high to low'],
  ['top-rated-first', 'Top rated first'],
]);

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}
