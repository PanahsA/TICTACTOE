const MAKE_MOVE = 'MAKE_MOVE';
const RESET_TICTACTOE = 'RESET_TICTACTOE';
const SET_GAME = 'SET_GAME';

const makeMoveAction = (position) => ({
  type: MAKE_MOVE,
  payload: position,
});

const resetTicTacToeAction = () => ({
  type: RESET_TICTACTOE,
});

const setGameAction = (state) => ({
  type: SET_GAME,
  payload: state,
});

makeMoveAction.type = MAKE_MOVE;
resetTicTacToeAction.type = RESET_TICTACTOE;
setGameAction.type = SET_GAME;

export { makeMoveAction, resetTicTacToeAction, setGameAction };
