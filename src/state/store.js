import { createStore, applyMiddleware } from 'redux';
import { persistStateMiddleware } from '../utils';
import rootReducer from './reducers';

const retreivedState = JSON.parse(localStorage.getItem('tictactoe'));

const store = createStore(
  rootReducer,
  retreivedState,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(persistStateMiddleware)
  )
);

export default store;