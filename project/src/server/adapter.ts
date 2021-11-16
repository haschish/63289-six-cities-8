import { Hotel } from '../types/hotel';
import { Review, ReviewFromServer } from '../types/review';
import { AuthInfo, User, UserFromServer } from '../types/user';

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

export const convertReviewToClient = ({user, ...res}: ReviewFromServer): Review => Object.assign({
  user: convertUserToClient(user),
}, res);
