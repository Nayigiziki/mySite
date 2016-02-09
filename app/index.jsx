import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.jsx';
//scroll to top on load.

ReactDOM.render(Routes(), document.getElementById('app'));