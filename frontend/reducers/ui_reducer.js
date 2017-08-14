import merge from 'lodash/merge';

import { FETCHING_BENCHES, RECEIVE_BENCHES } from './benches_reducer';

const LoadingReducer = (oldState = {loading: false}, action) => {
  Object.freeze(oldState);

  const newState = merge({}, oldState);

  switch(action.type) {
    case FETCHING_BENCHES:
      newState.loading = true;
    case RECEIVE_BENCHES:
      newState.loading = true;
  }
  return newState;
}

export default LoadingReducer;
