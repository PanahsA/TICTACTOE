import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { persistStateMiddleware } from '../utils';
import rootReducer from './reducers';
import epics from './epics';

const epicMiddleware = createEpicMiddleware();
const middleware = [persistStateMiddleware, epicMiddleware];

const initialState = {
  players: { player1: '', player2: '' },
  ticTacToe: { winner: null, squares: Array(9).fill(null), xIsNext: true },
};
const retrievedState =
  JSON.parse(localStorage.getItem('tictactoeRxJs')) || initialState;
  console.log(retrievedState)

const store = createStore(
  rootReducer,
  retrievedState,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(...middleware))
);

epicMiddleware.run(epics);

export default store;
