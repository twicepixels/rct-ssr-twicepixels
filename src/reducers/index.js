import { combineReducers } from 'redux';
import user from './user';
import users from './users';
import runtime from './runtime';

export default combineReducers({
  user,
  users,
  runtime,
});
