import React from 'react';
import ReactDOM from 'react-dom';
import {logIn, logOut, signUp} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  window.login = logIn;
  window.logout = logOut;
  window.signup = signUp;
  ReactDOM.render(<h1> Welcome to Bench BnB </h1>, root);
});
