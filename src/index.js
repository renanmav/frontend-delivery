import React from 'react';
import ReactDOM from 'react-dom';

import './config/reactotron';

import './styles/reset.css';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
