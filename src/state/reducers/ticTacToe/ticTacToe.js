import { makeMoveAction, resetTicTacToeAction } from '../../actions/ticTacToe';
import { manageMove } from '../../../utils';

const initialTicTacToeState = {
  winner: null,
  squares: Array(9).fill(null),
  xIsNext: true,
};

const reducer = (state = initialTicTacToeState, action) => {
  switch (action.type) {
    case makeMoveAction.type:
      return manageMove(state, action.payload);
    case resetTicTacToeAction.type:
      return initialTicTacToeState;
    default:
      return state;
  }
};
export default reducer;