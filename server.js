import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

// REACT SSR
import React from 'react';
import { renderToString } from 'react-dom/server';
// import createLocation from 'history/lib/createLocation';
import { match, RoutingContext} from 'react-router';
// import createHistory from 'history/lib/createMemoryHistory';
import getRoutes from './app/routes';
import fs from 'fs';
import compression from 'compression';

const port = process.env.PORT || 8080;
const app = express();


/*------------------------------ BASIC CONFIG --------------------------------*/

app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/build'));

/*-------------------------------- SSR ---------------------------------------*/

app.use('*', (req, res) => {
    const routes = getRoutes();

    match({ routes: routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      console.log('renderprops', renderProps);
      const appHtml = renderToString(<RoutingContext {...renderProps}/>)
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not found')
    }
  })


});

function renderPage(appHtml) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta charset="utf-8">
    <link rel=stylesheet href='/main.css'>
    <title>Joe-N</title>
  </head>
  <body>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
  </body>
</html>`
}

const server = app.listen(port, function() {
  console.log('LISTENING ON:', port);
});

