import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router';
import Routes from './routes.jsx';
import createHistory from 'history/lib/createBrowserHistory';
import useScroll from 'scroll-behavior/lib/useStandardScroll';
const history = useScroll(createHistory)();

ReactDOM.render(<Router history={history} routes={Routes()}/>, document.getElementById('app'));


