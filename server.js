import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

// REACT SSR
import React from 'react';
import { renderToString } from 'react-dom/server';
import createLocation from 'history/lib/createLocation';
import { RouterContext, match } from 'react-router';
import createHistory from 'history/lib/createMemoryHistory';
import getRoutes from './app/routes';

const port = process.env.PORT || 8080;
const app = express();


/*------------------------------ BASIC CONFIG --------------------------------*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/static', express.static(__dirname + '/build'));

/*-------------------------------- SSR ---------------------------------------*/

app.use((req, res) => {
  const history = createHistory();
  const location = createLocation(req.originalUrl);
  const routes = getRoutes();
  const store = configStore(history);

  match({ history, routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      return res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR: ', pretty.render(error));
      return res.status(500).send(error.message);
    } else if (!renderProps) {
      return res.status(404).send('Not found.');
    } 
  });
});


const server = app.listen(port, function() {
  console.log('LISTENING ON:', port);
});

