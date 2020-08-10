import { useState, useEffect } from 'react';
function areKeysEqual(a, b) {
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  return aKeys.join('') === bKeys.join('');
}
const usePersistedState = (key, initialState) => {
  const [persistedState, setPersistedState] = useState(() => {
    const retrievedState = JSON.parse(localStorage.getItem(key));
    if (!areKeysEqual(initialState, retrievedState)){
      localStorage.setItem(key, JSON.stringify(initialState));
    }
    if (!retrievedState) {
      localStorage.setItem(key, JSON.stringify(initialState));
    }
    return retrievedState || initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(persistedState));
    console.log('useEff');
  });
  return [persistedState, setPersistedState];
};

export default usePersistedState;
