import { combineEpics } from 'redux-observable';

import ticTacToeEpic from './ticTacToe';


export default combineEpics(ticTacToeEpic);