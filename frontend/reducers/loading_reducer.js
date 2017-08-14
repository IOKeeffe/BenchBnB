import merge from 'lodash/merge';

import { FETCHING_BENCHES, RECEIVE_BENCHES } from '../actions/bench_actions';

const LoadingReducer = (oldState = {currentlyLoading: false}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch(action.type) {
    case FETCHING_BENCHES:
      newState.currentlyLoading = true;
      return newState;
    case RECEIVE_BENCHES:
      newState.currentlyLoading = false;
      return newState;
    default:
      return newState;
  }
}

export default LoadingReducer;
