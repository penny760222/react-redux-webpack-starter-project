import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import configureStore from './store/configureStore';

import './stylesheets/styles';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// Render the React application to the DOM
ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history } routes={ routes } />
  </Provider>,
  document.getElementById('app')
);
