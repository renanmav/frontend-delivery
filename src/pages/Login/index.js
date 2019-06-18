import React from 'react';

import { Background, AuthWrapper } from './styles';

import logo from '~/assets/logo.png';

export default function Login() {
  return (
    <Background>
      <AuthWrapper>
        <img src={logo} alt="Logo" />
        <form>
          <input type="text" placeholder="Seu e-mail" />
          <input type="password" placeholder="Senha secreta" />
          <button type="submit">Entrar</button>
        </form>
      </AuthWrapper>
    </Background>
  );
}
