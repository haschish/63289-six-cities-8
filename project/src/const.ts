import { City } from './types/city';
import { Sort } from './types/sort';

export const MAX_REVIEWS = 10;

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

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export const typeMap = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

export const cities: City[] = [
  {
    location: {
      latitude: 48.856613,
      longitude: 2.352222,
      zoom: 13,
    },
    name: 'Paris',
  },
  {
    location: {
      latitude: 50.936389,
      longitude: 6.952778,
      zoom: 13,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 50.85,
      longitude: 4.35,
      zoom: 13,
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 13,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.565278,
      longitude: 10.001389,
      zoom: 13,
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude: 51.233333,
      longitude: 6.783333,
      zoom: 13,
    },
    name: 'Dusseldorf',
  },
];
