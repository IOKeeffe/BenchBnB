import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root'
import { logIn } from './actions/session_actions';
import { fetchBenches } from './actions/bench_actions';

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
  window.fetchBenches = fetchBenches;
  window.getState = store.getState;
  window.logIn = logIn;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}> </Root>, root);
});
