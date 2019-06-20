import { call, put, select } from 'redux-saga/effects';

import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { Creators } from '../ducks/order';

import api from '~/services/api';

function* index() {
  try {
    yield put(showLoading());

    const { token } = yield select(state => state.auth);

    const { data } = yield call(api.get, '/orders', {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    yield put(Creators.indexSuccess(data));
  } catch (err) {
    yield put(Creators.indexFailure('Algo deu errado.'));
  } finally {
    yield put(hideLoading());
  }
}

export { index };
