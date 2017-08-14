import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionFormContainer from './session/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import BenchIndexContainer from './benches/bench_index_container';


const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup  " component={SessionFormContainer} />
    </Switch>
    <Route path="/benches/index" component={BenchIndexContainer} />
  </div>
);

export default App;
