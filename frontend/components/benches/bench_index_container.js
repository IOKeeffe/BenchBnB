import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';
import BenchIndex from './bench_index';

const mapStateToProps = (state, ownProps) => {
  return {
    benches: state.benches.benches,
    loading: state.loading.currentlyLoading,
    errors: state.benches.errors,
  };
}

const mapDispatchToProps = (state) => {
  return {
    fetchBenches: () => dispatch(fetchBenches()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
