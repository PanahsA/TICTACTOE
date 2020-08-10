import React from 'react';
import usePersistedState from './usePersistedState'

//we use usePersistedState hook in the following hoc in order to decorate the WrappedComp with the persistedState prop and the function that updates it
const withPersistedState = (key, initialState=null) => WrappedComponent =>
  props => {
  const [persistedState, setPersistedState] = usePersistedState(
    key,
    initialState
  );

  return (
    <WrappedComponent
      persistedState={persistedState}
      setPersistedState={setPersistedState}
      {...props}
    />
  );
};

export default withPersistedState ;