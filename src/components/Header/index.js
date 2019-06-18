import React from 'react';

import styled from 'styled-components';
import logo from '../../assets/logo.png';

import { colors } from '../../styles';

const Container = styled.div`
  width: 100%;
  height: 72px;
  background: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0 20px;
  color: ${colors.white};

  img {
    height: 32px;
    width: 32px;
    margin-right: 14px;
  }

  h1 {
    font-weight: bold;
    font-size: 18px;
  }

  h2 {
    font-weight: bold;
    font-size: 16px;
    text-align: right;
  }

  a {
    color: ${colors.white};
    opacity: 0.6;
    font-size: 14px;
    text-align: right;
    text-decoration: none;
  }

  div:nth-child(1) {
    display: flex;
    align-items: center;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
`;

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
