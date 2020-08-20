import React from 'react';

import { TicTacToeProvider } from '../../models';
import {GameConnect} from '../Game';

const App = () => (
  <TicTacToeProvider>
    <GameConnect />
  </TicTacToeProvider>
);

export default App;
