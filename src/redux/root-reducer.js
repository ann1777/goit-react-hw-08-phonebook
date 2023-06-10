import { combineReducers } from 'redux';

import contactsReducer from './phonebook/phonebook-slice';
import filterReducer from './phonebook/phonebook-slice';
import persistedAuthReducer from './auth/auth-slice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedAuthReducer,
});
