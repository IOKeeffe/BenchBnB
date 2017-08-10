import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    benches: state.benches.benches,
    errors: state.benches.errors,
  };
}

const mapDispatchToProps = (state) => {
  return {
    fetchBenches: fetchBenches,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
