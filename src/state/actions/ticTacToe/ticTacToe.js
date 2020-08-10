const MAKE_MOVE = 'MAKE_MOVE';
const RESET_TICTACTOE = 'RESET_TICTACTOE';

const makeMoveAction = (position) => ({
  type: MAKE_MOVE,
  payload: position,
});

const resetTicTacToeAction = () => ({
  type: RESET_TICTACTOE,
});

makeMoveAction.type = MAKE_MOVE;
resetTicTacToeAction.type = RESET_TICTACTOE;

export { makeMoveAction, resetTicTacToeAction };