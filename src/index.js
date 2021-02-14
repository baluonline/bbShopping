import bsStyles from 'bootstrap/dist/css/bootstrap.min.css';
import customizedThemes from './styles/custom.scss';
import appStyles from './styles/styles.scss';
import 'bootstrap';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';
import ReactRouter from './ReactRouter';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import shoppingCardsReducers from "../src//reducers/";

const store = createStore(
  shoppingCardsReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ReactRouter />
  </Provider>,
  document.getElementById('root')
);
