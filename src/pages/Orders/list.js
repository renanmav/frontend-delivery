import React from 'react';

import styled from 'styled-components';

import { colors, metrics } from '~/styles';

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: ${metrics.contentWidth}px;

  padding: ${metrics.basePadding * 1.5}px ${metrics.basePadding * 6}px;

  h4 {
    font-weight: bold;
    color: ${colors.background};
    font-size: 18px;
  }
`;

const Order = styled.div`
  width: 100%;
  box-shadow: 0px 0px 10px ${colors.darkTransparent};
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.basePadding}px;
  margin-top: ${metrics.baseMargin * 1.5}px;

  color: ${colors.background};

  #info {
    display: flex;
    flex-direction: column;

    padding-bottom: ${metrics.basePadding / 2}px;
    margin-bottom: ${metrics.baseMargin}px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    p {
      font-size: 18px;
    }

    span {
      font-size: 11px;
      line-height: 14px;
      color: ${colors.regular};
    }

    strong {
      font-size: 16px;
      margin-top: 5px;
    }
  }

  #produtos {
    display: flex;
    flex-direction: column;

    padding-bottom: ${metrics.basePadding / 2}px;
    margin-bottom: ${metrics.baseMargin}px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  #obs {
    font-size: 14px;
    color: ${colors.dark};
  }
`;

// import { Container } from './styles';

export default function ListOrders() {
  return (
    <ListWrapper>
      <List>
        <h4>Últimos pedidos</h4>
        <Order>
          <div id="info">
            <p>
              Pedido
              {' '}
              <strong>#3</strong>
              {' '}
- Renan Machado
            </p>
            <span>há 2 segundos</span>
            <strong>R$ 42,00</strong>
          </div>
          <div id="produtos">Pizza</div>
          <p id="obs">
            <strong>Observações:</strong>
            {' '}
          </p>
        </Order>
        <Order>
          <div id="info">
            <p>
              Pedido
              {' '}
              <strong>#3</strong>
              {' '}
- Renan Machado
            </p>
            <span>há 2 segundos</span>
            <strong>R$ 42,00</strong>
          </div>
          <div id="produtos">Pizza</div>
          <p id="obs">
            <strong>Observações:</strong>
            {' '}
          </p>
        </Order>
      </List>
    </ListWrapper>
  );
}
