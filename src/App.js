import React, { Component } from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Page from "./page";
import Login from './components/common/Login.js';
import NotFound from './components/common/404.js';
import history from './route/history'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/admin" push />} />
            <Route path="/admin" component={Page} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
      </Router>
      )
  }
}

export default App;
