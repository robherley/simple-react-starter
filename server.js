const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const morgan = require('morgan');
const contentPath = process.env.NODE_ENV === 'production' ? 'dist' : 'src';
const port = process.env.PORT || 3000;

// Add API routes
require('./routes')(app);

// Middleware galore
app.use(morgan('dev')); // logging
app.use(compression()); // gzip
app.use(bodyParser.json()); // process post json

// Serve static folder
app.use(express.static(path.join(__dirname, contentPath)));

app.listen(port, () => {
  console.log(`🌋 Listening on port: ${port}`);
});
