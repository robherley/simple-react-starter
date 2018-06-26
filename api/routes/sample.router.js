const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.status(200).json({
      msg: 'Hello from the server!'
    });
  } catch (err) {
    res.status(400).json({
      msg: 'Some Error Occured',
      err
    });
  }
});

module.exports = router;
