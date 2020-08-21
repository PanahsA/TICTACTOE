import React, { useContext } from 'react';

import { ticTacToeContext } from '../../models/ticTacToe';

import { GameStatus } from '../../components';

const GameStatusConnect = () => {
  const {
    persistedState: { player1, player2, winner, xIsNext },
  } = useContext(ticTacToeContext);

  return (
    <GameStatus
      player1={player1}
      player2={player2}
      winner={winner}
      xIsNext={xIsNext}
    />
  );
};

export default GameStatusConnect;
