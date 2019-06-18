import styled from 'styled-components';

import { colors, metrics } from '~/styles';

import fundo from '~/assets/fundo.jpg';

export const Background = styled.div`
  background-image: linear-gradient(to bottom, ${colors.transparent}, ${colors.black}),
    url(${fundo});
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 72px;
    width: 72px;
    margin-bottom: ${metrics.baseMargin * 2}px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      border: 0;
      background: ${colors.white};
      height: 36px;
      margin-bottom: ${metrics.baseMargin}px;
      padding: 0 ${metrics.basePadding}px;
      border-radius: ${metrics.baseRadius}px;
    }

    button {
      border: 0;
      background: ${colors.primary};
      height: 36px;
      padding: 0 ${metrics.basePadding}px;
      border-radius: ${metrics.baseRadius}px;
      font-weight: bold;
      color: ${colors.white};
      cursor: pointer;

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;
