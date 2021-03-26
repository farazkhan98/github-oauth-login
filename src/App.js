import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login.js';
import RepoPage from './components/auth/RepoPage.js';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import RepoState from './context/Repos/RepoState.js';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <RepoState>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/oauth-callback' component={RepoPage} />
        </Switch>
      </Router>
    </RepoState>
  );
};

export default App;
