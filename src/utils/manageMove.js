import calculateWinner from './calculateWinner';

const manageMove = (state, position) => {
  const { winner, squares, xIsNext } = state;

  const newArr = [...state.squares];
  newArr[position] = xIsNext ? 'X' : 'O';

  if (winner || squares[position]) {
    return state;
  }

  return {
    ...state,
    squares: newArr,
    xIsNext: !state.xIsNext,
    winner: calculateWinner(newArr),
  };
};

export default manageMove;