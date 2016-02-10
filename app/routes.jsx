import React from 'react';
import { Route, Router } from 'react-router';
import App from './components/App.jsx';
import ProjectPage from './components/projectPage.jsx';

export default function(){
  return (
      <Route>
        <Route path='/' component={App}/>
        <Route path='/projects/:id' component={ProjectPage}/>  
      </Route>
    );
}
