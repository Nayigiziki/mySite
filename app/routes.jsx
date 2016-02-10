import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import ProjectPage from './components/projectPage.jsx';

export default function(){
  return (
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='projects/:id' component={ProjectPage}/>  
      </Route>
    );
}
