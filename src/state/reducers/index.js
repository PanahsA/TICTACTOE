import { combineReducers } from 'redux';

import playersReducer from './player';
import ticTacToeReducer from './ticTacToe';

export default combineReducers({
  players: playersReducer,
  ticTacToe: ticTacToeReducer,
});