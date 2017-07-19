import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signUp, logIn } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: user => (dispatch(logIn(user))),
    signUp: user => (dispatch(signUp(user))),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
