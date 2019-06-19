import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import Login from './pages/Login';
import Orders from './pages/Orders';

export default function Routes() {
  const { token } = useSelector(state => state.auth);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => {
            if (token) {
              return <Redirect to="/dashboard" />;
            }
            return <Login {...routerProps} />;
          }}
        />
        <Route
          exact
          path="/dashboard"
          render={(routerProps) => {
            if (token) {
              return <Orders {...routerProps} />;
            }
            return <Redirect to="/" />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}
