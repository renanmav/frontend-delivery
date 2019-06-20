import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Types as AuthActions } from '~/store/ducks/auth';

import logo from '~/assets/logo.png';

import { Container, ContentWrapper } from './styles';

export default function Header() {
  const { name } = useSelector(state => state.auth.user);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch({
      type: AuthActions.LOGOUT,
    });
  };

  return (
    <Container>
      <ContentWrapper>
        <div>
          <img src={logo} alt="Logo" />
          <h1>Pizzaria Don Juan</h1>
        </div>
        <div>
          <h2>{name}</h2>
          <a href="/" onClick={handleLogout}>
            Sair do app
          </a>
        </div>
      </ContentWrapper>
    </Container>
  );
}
