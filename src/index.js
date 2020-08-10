import store from './state/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Game } from './components';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Game store={store} />
  </Provider>,
  document.getElementById('root')
);