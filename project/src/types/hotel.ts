import { User } from './user';

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
}

export type City = {
  name: string,
  location: Location,
}

export type Good = 'Heating' | 'Kitchen' | 'Cable TV' | 'Washing machine' | 'Coffee machine' | 'Dishwasher';

export type TypeOfHouse = 'apartment' | 'room' | 'house' | 'hotel';

export type Hotel = {
  id: number,
  bedrooms: number,
  city: City,
  description: string,
  goods: Good[],
  host: User,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: Location,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: TypeOfHouse,
}
