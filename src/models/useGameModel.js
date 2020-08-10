import useTicTacToeModel from './useTicTacToeModel';
import usePlayerModel from './usePlayerModel';

const useGameModel = () => {
  const { makeMove, resetGame } = useTicTacToeModel();
  const { player1, player2, setPlayerName, resetPlayers } = usePlayerModel();

  const enhancedMakeMove = (position) => {
    if (!player1 || !player2) {
      alert();
      return;
    }
    makeMove(position);
  };

  const reset = () => {
    resetPlayers();
    resetGame();
  };

  return { setPlayerName, reset, makeMove: enhancedMakeMove, resetGame };
};

export default useGameModel;