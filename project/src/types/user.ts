export type User = {
  avatar: string,
  id: number,
  isPro: boolean,
  name: string,
}

export type AuthInfo = User & {
  email: string,
  token: string,
}

export type UserFromServer = Omit<User, 'isPro' | 'avatar'> & {
  'is_pro': boolean,
  'avatar_url': string,
};
