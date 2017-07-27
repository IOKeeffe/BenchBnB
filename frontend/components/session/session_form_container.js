import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signUp, logIn } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: String(ownProps.location.pathname === "/login" ? "login" : "signup"),
    formName: ownProps.location.pathname === "/login" ? "Log In" : "Sign Up",
    otherFormName: ownProps.location.pathname === "/login" ? "Sign Up" : "Log In",
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let dispatchLogIn = (user) => (dispatch(logIn(user)));
  let dispatchSignUp = (user) => (dispatch(signUp(user)));
  return {
    processForm: ownProps.location.pathname === "/login" ? dispatchLogIn : dispatchSignUp,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
