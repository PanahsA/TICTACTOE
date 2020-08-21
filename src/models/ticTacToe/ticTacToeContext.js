import React, { createContext, useEffect } from 'react';

import useTicTacToeModel from './useTicTacToeModel';

const ticTacToeContext = createContext('ticTacToeContext');

const { Provider } = ticTacToeContext;

const TicTacToeProvider = ({ children }) => (
  <Provider value={useTicTacToeModel()}>{children}</Provider>
);

export { ticTacToeContext, TicTacToeProvider };
