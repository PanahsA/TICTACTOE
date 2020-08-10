import { ofType } from 'redux-observable';
import { map } from 'rxjs//operators';

import { makeMoveAction, setGameAction } from '../../actions/ticTacToe';
import { manageMove } from '../../../utils';

const ticTacToeEpic = (action$, state$) =>
  action$.pipe(
    ofType(makeMoveAction.type),
    map(({ position }) => {
      setGameAction(manageMove(state$, position));
    })
  );

export default ticTacToeEpic;
