import React from 'react';

import {
  BoardConnect as Board,
  GameStatusConnect as GameStatus,
  Player,
} from '../../components';

import './game.css';

const Game = ({
  player1,
  player2,
  setPlayerName,
  xIsNext,
  resetGame,
  winner,
}) => {
  return (
    <div className='game'>
      <GameStatus />
      <div className='game-board'>
        <Board />
      </div>
      <div className='game-console'>
        <Player
          label='Player 1'
          player={player1}
          setPlayer={({ target: { value: name, id } }) => {
            setPlayerName(id, name);
          }}
        />
        <Player
          label='Player 2'
          player={player2}
          setPlayer={({ target: { value: name, id } }) =>
            setPlayerName(id, name)
          }
        />
        <div className='row'>
          <button type='button' onClick={() => resetGame()}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
