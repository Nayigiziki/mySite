import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

// REACT SSR
import React from 'react';
import { renderToString } from 'react-dom/server';
// import createLocation from 'history/lib/createLocation';
import { RouterContext, match } from 'react-router';
// import createHistory from 'history/lib/createMemoryHistory';
import getRoutes from './app/routes';


const port = process.env.PORT || 8080;
const app = express();


/*------------------------------ BASIC CONFIG --------------------------------*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/build'));

/*-------------------------------- SSR ---------------------------------------*/

app.use((req, res) => {
    const routes = getRoutes();

      res.status(200).send(renderToString(<RouterContext {...renderProps} />))


  //   match({ routes: routes, location: req.url }, (error, redirectLocation, renderProps) => {
  //   if (error) {
  //     res.status(500).send(error.message)
  //   } else if (redirectLocation) {
  //     res.redirect(302, redirectLocation.pathname + redirectLocation.search)
  //   } else if (renderProps) {
  //     console.log(renderProps);
  //     var 
  //     res.status(200).send(renderProps)

  //   } else {
  //     res.status(404).send('Not found')
  //   }
  // })
});


const server = app.listen(port, function() {
  console.log('LISTENING ON:', port);
});

