export enum ActionType {
  ChangeCity = 'app/changeCity',
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity,
  payload: string
}

export type Actions = ChangeCityAction;
