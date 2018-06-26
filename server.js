const express = require('express');

const app = express();
const compression = require('compression');
const path = require('path');
const morgan = require('morgan');
const routes = require('./api/routes/index.router');

const contentPath = process.env.NODE_ENV === 'production' ? 'dist' : 'src';
const port = process.env.PORT || 1337;

// Middleware galore
app.use(morgan('dev')); // logging
app.use(compression()); // gzip
app.use(express.json()); // process post json

// Add API routes
app.use(routes);

// Serve static folder
app.use(express.static(path.join(__dirname, contentPath)));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`🌋 Listening on port: ${port}`);
});
