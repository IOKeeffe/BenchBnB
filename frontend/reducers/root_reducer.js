import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BenchesReducer from './benches_reducer';
import LoadingReducer from './loading_reducer';

export default combineReducers({
  session: SessionReducer,
  benches: BenchesReducer,
  loading: LoadingReducer,
});
