import React from 'react';

import pizza from '~/assets/pizza.png';

import {
  ListWrapper, List, Order, Product,
} from './styles';

export default function ListOrders() {
  return (
    <ListWrapper>
      <List>
        <h4>Últimos pedidos</h4>
        <Order>
          <div id="info">
            <p>
              {'Pedido '}
              <strong>#3</strong>
              {' - Renan Machado'}
            </p>
            <span>há 2 segundos</span>
            <strong>R$ 42,00</strong>
          </div>
          <div id="produtos">
            <Product>
              <img src={pizza} alt="produto" />
              <div>
                <p>Pizza calabresa</p>
                <span>Tamanho: Média</span>
              </div>
            </Product>
          </div>
          <p id="obs">
            <strong>Observações:</strong>
            {' '}
          </p>
        </Order>
      </List>
    </ListWrapper>
  );
}
