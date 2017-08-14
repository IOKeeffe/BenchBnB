import * as BenchApiUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const FETCHING_BENCHES = "FETCHING_BENCHES";

export const fetchBenches = () => dispatch => {
  return BenchApiUtil.fetchBenches().then(benches => {
    dispatch(receiveBenches(benches));
    dispatch(fetchingBenches(true));
  });
}

export const receiveBenches = benches => {
  return {
    type: RECEIVE_BENCHES,
    benches,
  }
}

export const fetchingBenches = fetching => {
  return {
    type: FETCHING_BENCHES,
    fetching,
  }
}
