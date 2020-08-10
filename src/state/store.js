import { createStore, applyMiddleware } from 'redux';
import { persistStateMiddleware, areKeysEqual } from '../utils';
import rootReducer from './reducers';

const initialState = {
  players: { player1: '', player2: '' },
  ticTacToe: { winner: null, squares: Array(9).fill(null), xIsNext: true },
};
const retreivedState = JSON.parse(localStorage.getItem('tictactoe'));

const store = createStore(
  rootReducer,
  areKeysEqual(initialState, retreivedState) ? retreivedState : initialState,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(persistStateMiddleware)
  )
);

export default store;
