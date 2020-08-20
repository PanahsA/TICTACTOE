import React, { useContext } from 'react';

import { ticTacToeContext } from '../../models/ticTacToe';

import { Game } from '../../components';

const GameConnect = () => {
  const {
    persistedState: { player1, player2, winner, xIsNext, squares },
    makeMove,
    setPlayerName,
    resetGame,
  } = useContext(ticTacToeContext);

  return (
    <Game
      stateData={{
        player1,
        player2,
        winner,
        xIsNext,
        setPlayerName,
        resetGame,
      }}
    />
  );
};

export default GameConnect;
