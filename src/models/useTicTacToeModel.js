import { useSelector, useDispatch } from 'react-redux';

import { makeMoveAction } from '../state/actions/ticTacToe';
import { squares, xIsNext, winner } from '../state/selectors';

const useTicTacToe = () => {
  const dispatch = useDispatch();

  return {
    squares: useSelector(squares),
    xIsNext: useSelector(xIsNext),
    winner: useSelector(winner),
    makeMove: (position) => dispatch(makeMoveAction(position)),
    foo: () => 'hi',
  };
};

export default useTicTacToe;
