import { createStore, applyMiddleware } from 'redux';
import { persistStateMiddleware } from '../utils';
import rootReducer from './reducers';

const initialState = {
  players: { player1: '', player2: '' },
  ticTacToe: { winner: null, squares: Array(9).fill(null), xIsNext: true },
};
const retreivedState = JSON.parse(localStorage.getItem('tictactoe'));

function areKeysEqual(a, b) {
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  return aKeys.join('') === bKeys.join('');
}

console.log(
  areKeysEqual(initialState, retreivedState) ? retreivedState : initialState
);
console.log(retreivedState);
const store = createStore(
  rootReducer,
  areKeysEqual(initialState,retreivedState) ? retreivedState : initialState,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(persistStateMiddleware)
  )
);

export default store;
