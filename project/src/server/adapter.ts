import { Hotel } from '../types/hotel';
import { User } from '../types/user';

export type HotelFromServer = Omit<Hotel, 'maxAdults' | 'isFavorite' | 'isPremium' | 'previewImage' | 'host'> & {
  'is_favorite': boolean,
  'is_premium': boolean,
  'max_adults': number,
  'preview_image': string,
  host: UserFromServer,
};

export const convertHotelToClient = (data: HotelFromServer): Hotel => ({
  id: data.id,
  bedrooms: data.bedrooms,
  city: data.city,
  description: data.description,
  goods: data.goods,
  host: convertUserToClient(data.host),
  images: data.images,
  isFavorite: data.is_favorite,
  isPremium: data.is_premium,
  location: data.location,
  maxAdults: data.max_adults,
  previewImage: data.preview_image,
  price: data.price,
  rating: data.rating,
  title: data.title,
  type: data.type,
});

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
