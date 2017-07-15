import React from 'react';
import ReactDOM from 'react-dom';
import {logIn, logOut, signUp} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  let store;
  if(window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] }};
    store = configureStore(preloadedState);
  }
  else {
    store = configureStore();
  }
  window.login = logIn;
  window.logout = logOut;
  window.signup = signUp;
  ReactDOM.render(<h1> This is Bench BnB </h1>, root);
});
