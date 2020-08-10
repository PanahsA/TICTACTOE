import { useState, useEffect } from 'react';

const usePersistedState = (key, initialState) => {
  const [persistedState, setPersistedState] = useState(() => {
    const retrievedState = JSON.parse(localStorage.getItem(key));
    if (!retrievedState)
      localStorage.setItem(key, JSON.stringify(initialState));

    return retrievedState || initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(persistedState));
  });
  return [persistedState, setPersistedState];
};

export default usePersistedState;
