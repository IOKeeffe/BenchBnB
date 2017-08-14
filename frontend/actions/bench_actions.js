import * as BenchApiUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const FETCHING_BENCHES = "FETCHING_BENCHES";

export const fetchBenches = () => dispatch => {
  dispatch(fetchingBenches());
  return BenchApiUtil.fetchBenches().then(benches => {
    dispatch(receiveBenches(benches));
  });
}

export const receiveBenches = benches => {
  return {
    type: RECEIVE_BENCHES,
    benches,
  };
}

export const fetchingBenches = (obj = {}) => {
  return {
    type: FETCHING_BENCHES,
    obj,
  };
}
