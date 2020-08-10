import { useDispatch } from 'react-redux';
import useTicTacToeModel from './useTicTacToeModel';
import usePlayerModel from './usePlayerModel';
import { resetGameAction } from '../state/actions/game';

const useGameModel = () => {
  const dispatch = useDispatch();
  const resetGame= ()=>{dispatch(resetGameAction())}
  const { makeMove } = useTicTacToeModel();
  const { player1, player2, setPlayerName } = usePlayerModel();

  const enhancedMakeMove = (position) => {
    if (!player1 || !player2) {
      alert('add names');
      return;
    }
    makeMove(position);
  };

  // const reset = () => {
  //   resetPlayers();
  //   resetGame();
  // };

  return {
    setPlayerName,
    makeMove: enhancedMakeMove,
    resetGame: resetGame,
  };
};

export default useGameModel;
