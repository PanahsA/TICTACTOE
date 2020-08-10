import { useState, useEffect } from 'react';
import areKeysEqual from './areKeysEqual';

const usePersistedState = (key, initialState) => {
  const [persistedState, setPersistedState] = useState(() => {
    const retrievedState = JSON.parse(localStorage.getItem(key));
    console.log(retrievedState);
    if (!retrievedState) {
      localStorage.setItem(key, JSON.stringify(initialState));
      console.log('just setted initial state in place of null ');
    } 
    // else if (!areKeysEqual(initialState, retrievedState)) {
    //   localStorage.setItem(key, JSON.stringify(initialState));
    //   console.log(
    //     'to retreievd state dn exei idio format me to initial(exei xemeinei apo allou), settarw to initial'
    //   );
    // }
    console.log(
      'abt to return retrivedState, if its null it will retuen initial',
      retrievedState
    );

    // console.log(
    //   (retrievedState && areKeysEqual(initialState, retrievedState)) ||
    //     initialState
    // );
    // console.log(retrievedState||initialState)
    return (
      retrievedState  ||
      initialState
    );
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(persistedState));
    console.log('useEff');
  });
  return [persistedState, setPersistedState];
};

export default usePersistedState;
