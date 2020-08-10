import React from 'react';

import Square from '../Square';

import './board.css';

const Board = ({ squares, onSquareClick }) => {
  const renderSquare = (pos) => {
    return (
      <Square
        value={squares[pos]}
        onClick={() => {
          onSquareClick(pos);
        }}
      ></Square>
    );
  };

  return (
    <div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;