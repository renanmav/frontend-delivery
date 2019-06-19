import { call, put } from 'redux-saga/effects';

import { Creators } from '../ducks/auth';

import api from '~/services/api';

function* login(action) {
  try {
    const { email, password } = action.payload;

    const { data: response } = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { token } = response;

    const { data: user } = yield call(api.get, '/sessions', {
      headers: { Authorization: `bearer ${token}` },
    });

    if (user.is_admin === true) {
      yield put(Creators.loginSuccess(token, user));
    } else {
      // eslint-disable-next-line no-throw-literal
      throw 'user is not admin';
    }
  } catch (err) {
    if (err === 'user is not admin') {
      yield put(Creators.loginFailure('Você não é administrador'));
    } else {
      yield put(
        Creators.loginFailure(
          'Algo deu errado. Verifique suas credenciais e '
            + 'certifique-se que a sua conta foi cadastrada com sucesso.',
        ),
      );
    }
  }
}

export { login };
