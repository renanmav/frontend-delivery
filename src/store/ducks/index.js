import { combineReducers } from 'redux';

import { loadingBarReducer } from 'react-redux-loading-bar';

import auth from './auth';
import order from './order';

const reducers = combineReducers({
  auth,
  order,
  loadingBar: loadingBarReducer,
});

export default reducers;
