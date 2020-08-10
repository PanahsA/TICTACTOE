import React from 'react';

import { Board, GameStatus, Player } from '../../components';
import { useTicTacToeModel } from '../../models';
// import {withPersistedState} from '../../utils'; this Hoc could be used to pass the state data as props

import './game.css';

const Game = () => {
  const {
    persistedState: { player1, player2, winner, xIsNext, squares },
    makeMove,
    setPlayerName,
    resetGame,
  } = useTicTacToeModel();

  return (
    <div className='game'>
      <GameStatus
        winner={winner}
        xIsNext={xIsNext}
        player1={player1}
        player2={player2}
      />
      <div className='game-board'>
        <Board squares={squares} makeMove={(position) => makeMove(position)} />
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

// const App= withPersistedState(Game)('tictactoe',initialState)

export default Game;
