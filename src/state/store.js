import { createStore, applyMiddleware } from 'redux';
import { persistStateMiddleware, areKeysEqual } from '../utils';
import rootReducer from './reducers';

const initialState = {
  players: { player1: '', player2: '' },
  ticTacToe: { winner: null, squares: Array(9).fill(null), xIsNext: true },
};
const retreivedState = JSON.parse(localStorage.getItem('tictactoeRedux'))||initialState;

const store = createStore(
  rootReducer,
  retreivedState ,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(persistStateMiddleware)
  )
);

export default store;
