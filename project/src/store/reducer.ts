import { combineReducers } from 'redux';
import appDataReducer from './app-data/reducer';
import appProcessReducer from './app-process/reducer';
import userDataReducer from './user-data/reducer';

export enum NameSpace {
  AppData = 'AppData',
  AppProcess = 'AppProcess',
  UserData = 'UserData',
}

const reducer = combineReducers({
  [NameSpace.AppData]: appDataReducer,
  [NameSpace.AppProcess]: appProcessReducer,
  [NameSpace.UserData]: userDataReducer,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
