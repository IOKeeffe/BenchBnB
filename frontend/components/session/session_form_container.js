import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signUp, logIn } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    formType: String(ownProps.location.pathname)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: user => (dispatch(logIn(user))),
    signUp: user => (dispatch(signUp(user))),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
