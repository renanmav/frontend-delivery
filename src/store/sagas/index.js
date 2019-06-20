import { all, takeLatest } from 'redux-saga/effects';

import { Types as AuthTypes } from '../ducks/auth';
import { login } from './auth';

import { Types as OrderTypes } from '../ducks/order';
import { index } from './order';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(OrderTypes.INDEX_REQUEST, index),
  ]);
}
