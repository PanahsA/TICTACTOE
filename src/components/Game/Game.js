import React from 'react';

import { Board, GameStatus, Player } from '../../components';

import './game.css';

const Game = ({
  winner,
  xIsNext,
  player1,
  player2,
  squares,
  makeMove,
  setPlayerName,
  reset,
}) => {
  return (
    <div className='game'>
      <GameStatus
        winner={winner}
        xIsNext={xIsNext}
        player1={player1}
        player2={player2}
      />
      <div className='game-board'>
        <Board
          squares={squares}
          onSquareClick={(position) => makeMove(position)}
        />
      </div>
      <div className='gameConsole'>
        <Player
          label='Player 1'
          player={player1}
          setPlayer={({ target: { value: name, id } }) => {
            setPlayerName(name, id);
          }}
        />
        <Player
          label='Player 2'
          player={player2}
          setPlayer={({ target: { value: name, id } }) =>
            setPlayerName(name, id)
          }
        />
        <div className='row'>
          <button type='button' onClick={() => reset()}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
