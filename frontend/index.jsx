import React from 'react';
import ReactDOM from 'react-dom';
import {logIn, logOut, signUp} from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root'

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
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = logIn;
  window.logout = logOut;
  window.signup = signUp;
  ReactDOM.render(<Root store={store} />,, root);
});
