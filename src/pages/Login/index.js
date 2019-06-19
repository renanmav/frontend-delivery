import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Types as AuthActions } from '~/store/ducks/auth';

import { Background, AuthWrapper } from './styles';

import logo from '~/assets/logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <button type="submit">Entrar</button>
        </form>
      </AuthWrapper>
    </Background>
  );
}
