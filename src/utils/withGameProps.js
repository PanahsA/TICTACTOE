import React from 'react';

import { useGameModel, usePlayerModel, useTicTacToeModel } from '../models';

const withGameProps = (WrappedComponent) => (props) => {
  const { setPlayerName, resetGame, makeMove } = useGameModel();
  const { player1, player2 } = usePlayerModel();
  const { squares, xIsNext, winner } = useTicTacToeModel();
  return (
    <div>
      <WrappedComponent
        xIsNext={xIsNext}
        winner={winner}
        player1={player1}
        player2={player2}
        setPlayerName={setPlayerName}
        resetGame={resetGame}
        makeMove={makeMove}
        squares={squares}
        {...props}
      />
    </div>
  );
};

export default withGameProps;