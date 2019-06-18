import React from 'react';

import logo from '~/assets/logo.png';

import { Container, ContentWrapper } from './styles';

export default function Header() {
  return (
    <Container>
      <ContentWrapper>
        <div>
          <img src={logo} alt="Logo" />
          <h1>Pizzaria Don Juan</h1>
        </div>
        <div>
          <h2>Renan Machado</h2>
          <a href="/">Sair do app</a>
        </div>
      </ContentWrapper>
    </Container>
  );
}
