import { createStore, applyMiddleware } from 'redux';
import { persistStateMiddleware } from '../utils';
import rootReducer from './reducers';

const initialState = {
  players: { player1: '', player2: '' },
  ticTacToe: { winner: null, squares: Array(9).fill(null), xIsNext: true },
};
const retreivedState = JSON.parse(localStorage.getItem('tictactoe'));

function areKeysEqual() {
  var aKeys = Object.keys(initialState).sort();
  var bKeys = Object.keys(retreivedState).sort();
  return aKeys.join('') === bKeys.join('');
}

areKeysEqual();

const store = createStore(
  rootReducer,
  areKeysEqual() ? retreivedState : initialState,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(persistStateMiddleware)
  )
);

export default store;
