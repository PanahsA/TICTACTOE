const persistStateMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const nextState = store.getState();
  localStorage.setItem('tictactoeRedux', JSON.stringify(nextState));
  return result;
};

export default persistStateMiddleware;
