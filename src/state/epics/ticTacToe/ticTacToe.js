import { ofType } from 'redux-observable';
import { map } from 'rxjs//operators';

import { makeMoveAction, setGameAction, resetTicTacToeAction } from '../../actions/ticTacToe';
import {  resetPlayersAction } from '../../actions/player';
import { manageMove } from '../../../utils';

const ticTacToeEpic = (action$, state$) =>
  action$.pipe(
    ofType(makeMoveAction.type),
    map(({ position }) =>
      setGameAction(manageMove(state$.value.ticTacToe, position))
    )
  );

  const resetGameEpic = action$ =>
  action$.pipe(
    ofType(resetTicTacToeAction.type),
    switchMapTo([resetPlayers(), resetTicTacToe()]),
  );

export default ticTacToeEpic;
