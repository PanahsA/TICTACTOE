import React, { useContext } from 'react';

import { ticTacToeContext } from '../../models/ticTacToe';

import { Game } from '../../components';

const GameConnect = () => {
  const {
    persistedState: { player1, player2, winner, xIsNext },
    setPlayerName,
    resetGame,
  } = useContext(ticTacToeContext);

  return (
    <Game
      player1={player1}
      player2={player2}
      winner={winner}
      xIsNext={xIsNext}
      setPlayerName={setPlayerName}
      resetGame={resetGame}
    />
  );
};

export default GameConnect;
