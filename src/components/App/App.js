import React from 'react';

import { TicTacToeProvider } from '../../models';
import {Game} from '../Game';

const App = () => (
  <TicTacToeProvider>
    <Game />
  </TicTacToeProvider>
);

export default App;
