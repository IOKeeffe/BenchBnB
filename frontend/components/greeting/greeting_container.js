import { logOut } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => (dispatch(logOut())),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
