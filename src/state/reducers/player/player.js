import { setPlayerNameAction, resetPlayersAction } from '../../actions/player';

const initialPlayerState = {
  player1: '',
  player2: '',
};

const reducer = (state = initialPlayerState, action) => {
  switch (action.type) {
    case setPlayerNameAction.type:
      if (action.payload.id === 'Player 1') {
        return {
          ...state,
          player1: action.payload.name,
        };
      } else {
        return {
          ...state,
          player2: action.payload.name,
        };
      }
    case resetPlayersAction.type:
      return initialPlayerState;
    default:
      return state;
  }
};

export default reducer;