import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './normalize.css';
import './index.scss';

import Header from './components/Header/Header';

import IndexRoute from './routes/index';
import ItemsRoute from './routes/items/items'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={IndexRoute}/>
          <Route path="/items" exact component={ItemsRoute}/>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
