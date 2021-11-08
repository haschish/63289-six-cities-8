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
