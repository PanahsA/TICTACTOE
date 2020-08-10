import { ofType } from 'redux-observable';
import {
  switchMapTo,
} from 'rxjs//operators';

import {
  resetTicTacToeAction,
} from '../../actions/ticTacToe';
import { resetPlayersAction } from '../../actions/player';
import { resetGameAction} from '../../actions/game';



const resetGameEpic = (action$) =>
  action$.pipe(
    ofType(resetGameAction.type),
    switchMapTo([resetPlayersAction(), resetTicTacToeAction()])
  );

export default resetGameEpic;
