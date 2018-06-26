const router = require('express').Router();

/* eslint-disable */
const routes = [['/sample', require('./sample.router')]];
/* eslint-enable */

routes.map(([url, subRouter]) => router.use(url, subRouter));

router.use('*', (req, res) => {
  res.status(404).json({
    err: `The route '${req.originalUrl}' is invalid.`
  });
});

module.exports = router;
