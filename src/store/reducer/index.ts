import { combineReducers } from 'redux';
import authReducer from './auth';
import contactReducer from './contacts';

export const reducer = combineReducers({
  auth: authReducer,
  contact: contactReducer,
});
