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
