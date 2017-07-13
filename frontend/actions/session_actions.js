import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const logIn = (user) => dispatch => {
  return SessionApiUtil.logIn(user)
  .then(user => { return dispatch(receiveCurrentUser(user));},
        errors => {dispatch(receiveErrors(errors));});
};

export const logOut = () => dispatch => {
  return SessionApiUtil.logOut()
  .then(user => { return dispatch(receiveCurrentUser(null));},
        errors => {dispatch(receiveErrors(errors));});
};

export const signUp = (user) => dispatch => {
  return SessionApiUtil.signUp(user)
  .then(user => { return dispatch(receiveCurrentUser(user));},
        errors => {dispatch(receiveErrors(errors));});
};

export const receiveCurrentUser = (user) => ({
  type = RECEIVE_CURRENT_USER,
  user,
})

export const receiveErrors = (errors) => ({
  type = RECEIVE_ERRORS,
  errors,
})
