import { combineReducers } from 'redux';
import filterReducer from './filter.slice';
import contactsReducer from './slice.contacts';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
