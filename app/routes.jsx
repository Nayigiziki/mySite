import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import App from './components/App.jsx';
import ProjectPage from './components/projectPage.jsx';
import createBrowserHistory from 'history/lib/createBrowserHistory'
const history = createBrowserHistory()
export default function(){
  return (
      <Router history={history}>
        <Route path='/' component={App}/>
        <Route path='/projects/:id' component={ProjectPage}/>
      </Router>
    );
}