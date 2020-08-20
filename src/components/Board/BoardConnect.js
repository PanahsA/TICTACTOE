import Board from './Board';
import React, { useContext } from 'react';

import { ticTacToeContext } from '../../models/ticTacToe';

const BoardConect = () => {
  const { squares, makeMove } = useContext(ticTacToeContext);

  return <Board squares={squares} makeMove={makeMove} />;
};

export default BoardConect;