const persistStateMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log(action, 'dispatched');
  const nextState = store.getState();
  localStorage.setItem('tictactoe', JSON.stringify(nextState));
  return next(result);
};

export default persistStateMiddleware;