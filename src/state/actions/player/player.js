const SET_PLAYER_NAME = 'SET_PLAYER_NAME';
const RESET_PLAYERS = 'RESET_PLAYERS';

const setPlayerNameAction = (name, id) => ({
  type: SET_PLAYER_NAME,
  payload: { name, id },
});

const resetPlayersAction = () => ({ type: RESET_PLAYERS });

setPlayerNameAction.type = SET_PLAYER_NAME;
resetPlayersAction.type = RESET_PLAYERS;

export { setPlayerNameAction, resetPlayersAction };