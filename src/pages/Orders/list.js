import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Types as OrderActions } from '~/store/ducks/order';

import LoadingBar from 'react-redux-loading-bar';

import {
  ListWrapper, List, Order, Product,
} from './styles';

export default function ListOrders() {
  const { orders } = useSelector(state => state.order);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: OrderActions.INDEX_REQUEST,
    });
  }, []);

  return (
    <ListWrapper>
      <LoadingBar />
      <List>
        <h4>Últimos pedidos</h4>
        {orders.map(order => (
          <Order>
            <div id="info">
              <p>
                {'Pedido '}
                <strong>{`#${order.id}`}</strong>
                {` - ${order.user.name}`}
              </p>
              <span>há 2 segundos</span>
              <strong>{order.total_price}</strong>
            </div>
          </Order>
        ))}
      </List>
    </ListWrapper>
  );
}

/**
 *  <Order>
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
 */
