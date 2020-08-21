import React from 'react';

import { TicTacToeProvider } from '../../models';
import { GameConnect } from '../Game';

const App = () => {
  return (
    <TicTacToeProvider>
      <GameConnect />
    </TicTacToeProvider>
  );
};

export default App;
