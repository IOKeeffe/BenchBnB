import { RECEIVE_BENCHES, FETCHING_BENCHES } from '../actions/bench_actions';
import merge from 'lodash/merge';

const BenchesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = merge({}, oldState);

    switch(action.type) {
      case RECEIVE_BENCHES:
        newState.benches = action.benches;
        return newState;

      default: return newState;
    }
}

export default BenchesReducer;
