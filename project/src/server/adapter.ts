import { Hotel } from '../types/hotel';
import { AuthInfo, User } from '../types/user';

export type HotelFromServer = Omit<Hotel, 'maxAdults' | 'isFavorite' | 'isPremium' | 'previewImage' | 'host'> & {
  'is_favorite': boolean,
  'is_premium': boolean,
  'max_adults': number,
  'preview_image': string,
  host: UserFromServer,
};

/* eslint-disable camelcase */
export const convertHotelToClient = ({is_favorite, is_premium, max_adults, preview_image, host, ...res}: HotelFromServer): Hotel => Object.assign(
  res,
  {
    isFavorite: is_favorite,
    isPremium: is_premium,
    maxAdults: max_adults,
    previewImage: preview_image,
    host: convertUserToClient(host),
  },
);
/* eslint-enable camelcase */

export type UserFromServer = Omit<User, 'isPro' | 'avatar'> & {
  'is_pro': boolean,
  'avatar_url': string,
};

export const convertUserToClient = (data: UserFromServer): User => ({
  avatar: data.avatar_url,
  id: data.id,
  isPro: data.is_pro,
  name: data.name,
});

export type AuthInfoFromServer = UserFromServer & {
  email: string,
  token: string,
}

export const convertAuthInfoToClient = ({email, token, ...res}: AuthInfoFromServer): AuthInfo => Object.assign({
  email,
  token,
}, convertUserToClient(res));
