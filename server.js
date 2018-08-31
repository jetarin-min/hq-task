const express = require('express');
const next = require('next');

const configs = require('./configs');

const { port, isProduction } = configs;
const app = next({ dev: !isProduction });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    server.get('/', (req, res) => (
      app.render(req, res, '/', req.query)
    ));

    server.get('/movie/:id', (req, res) => ( // TODO change id to slug for better SEO
      app.render(req, res, '/movie', { ...req.query, id: req.params.id })
    ));

    // server.get('/products', (req, res) => {
    //   return app.render(req, res, '/products', req.query);
    // });

    // server.get('/paper/:slug', (req, res) => {
    //   return app.render(req, res, '/paperDetail', { ...req.query, slug: req.params.slug });
    // });
    // server.get('/paper', (req, res) => {
    //   return app.render(req, res, '/paper', req.query);
    // });
    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
