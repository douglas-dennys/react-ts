import { combineReducers } from 'redux';

import login from './login';
import recover from './recover';
import reset from './reset';
import dashboard from './dashboard';

export default combineReducers({
  login,
  recover,
  reset,
  dashboard,
});
