import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Types as OrderActions } from '~/store/ducks/order';

import LoadingBar from 'react-redux-loading-bar';

import Currency from 'react-currency-formatter';

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
          <Order key={order.id}>
            <div id="info">
              <p>
                {'Pedido '}
                <strong>{`#${order.id}`}</strong>
                {` - ${order.user.name}`}
              </p>
              <span>{`há ${order.from_now}`}</span>
              <strong>
                <Currency quantity={order.total_price} currency="BRL" />
              </strong>
            </div>
            <div id="produtos">
              {order.sizes.map((size, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Product key={index}>
                  <img
                    src={`http://localhost:8080/files?id=${
                      size.product.file_id
                    }`}
                    alt="produto"
                  />
                  <div>
                    <p>{size.product.name}</p>
                    <span>{`Tamanho: ${size.name}`}</span>
                  </div>
                </Product>
              ))}
            </div>
            <p id="obs">
              <strong>Observações:</strong>
              {order.observation && ` ${order.observation}`}
            </p>
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
