import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Types as AuthActions } from '~/store/ducks/auth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Spinner } from 'react-activity';
import { Background, AuthWrapper } from './styles';

import logo from '~/assets/logo.png';
import { colors } from '~/styles';

import 'react-activity/dist/react-activity.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: AuthActions.LOGIN_REQUEST,
      payload: { email, password },
    });
  };

  return (
    <Background>
      <AuthWrapper>
        <img src={logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha secreta"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">
            {loading ? <Spinner color={colors.white} size={10} /> : 'Entrar'}
          </button>
        </form>
      </AuthWrapper>
      <ToastContainer autoClose={3000} />
    </Background>
  );
}
