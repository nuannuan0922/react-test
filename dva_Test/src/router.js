import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ProductList from './routes/Products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/products" exact component={ProductList} />
        <Route path="/example" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
