/* eslint-disable max-len */
import '@babel/polyfill';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../${path-to-application}/App';

const PORT = 8000;

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

const stringifiedComponent = ReactDOMServer.renderToString(<App />);

app.get('/*', (_, response) => {
  return response.send(
    `<!DOCTYPE html>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.0/milligram.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body>
        <div class="container">
          <div class="row">
            <div data-main class="column">
              ${stringifiedComponent}
            </div>
          </div>
        </div>
        <script src="plans.spa.js"></script>
      </body>
    </html>`
  );
});

app.post('/*', (request, response) => {
  const { money, recipient } = request.body;
  return response.send(
    `<!DOCTYPE html>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.0/milligram.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body>
        <div class="container">
          <div class="row">
            <div class="column">
              <h1>${money} was sent to ${recipient}</h1>
            </div>
          </div>
        </div>
      </body>
    </html>`
  );
});

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
