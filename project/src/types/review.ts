import { User, UserFromServer } from './user';

export type Review = {
  comment: string,
  date: Date,
  id: number,
  rating: number,
  user: User,
}

export type ReviewFromServer = Omit<Review, 'user'> & {
  user: UserFromServer,
};
