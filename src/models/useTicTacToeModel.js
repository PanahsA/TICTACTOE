import { calculateWinner, usePersistedState } from '../utils';

const initialState = {
  winner: null,
  player1: '',
  player2: '',
  squares: Array(9).fill(null),
  xIsNext: true,
};

const useTicTacToeModel = () => {
  const [persistedState, setPersistedState] = usePersistedState(
    'tictactoeReact',
    initialState
  );

  console.log(persistedState);

  const setPlayerName = (id, name) => {
    setPersistedState({
      ...persistedState,
      [id === 'Player 1' ? 'player1' : 'player2']: name,
    });
  };

  const makeMove = (position) => {
    const { player1, player2, winner, xIsNext, squares } =
      persistedState || initialState;

    // Game not ready to start
    if (!player1 || !player2) {
      alert('Give names');
      return;
    }

    // Game finished or invalid move
    if (winner || squares[position]) {
      return;
    }

    const newSquaresArray = [...squares];
    newSquaresArray[position] = xIsNext ? 'X' : 'O';

    const newWinner = calculateWinner(newSquaresArray);

    setPersistedState({
      ...persistedState,
      winner: newWinner,
      squares: newSquaresArray,
      xIsNext: !xIsNext,
    });
  };

  const resetGame = () => {
    setPersistedState(initialState);
  };

  return { persistedState, makeMove, setPlayerName, resetGame };
};

export default useTicTacToeModel;
