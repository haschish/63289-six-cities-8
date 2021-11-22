import { User, UserFromServer } from './user';

export type Review = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: User,
}

export type ReviewFromServer = Omit<Review, 'user'> & {
  user: UserFromServer,
};
