import { useDispatch, useSelector } from 'react-redux';

import { setPlayerNameAction } from '../state/actions/player';
import {
  player1 as player1Selector,
  player2 as player2Selector,
} from '../state/selectors';

const usePlayerModel = () => {
  const dispatch = useDispatch();
  return {
    player1: useSelector(player1Selector),
    player2: useSelector(player2Selector),
    setPlayerName: (name, id) => dispatch(setPlayerNameAction(name, id)),
  };
};

export default usePlayerModel;
