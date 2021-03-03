var express = require('express');
var router = express.Router();

/* GET APIs listing. */
router.get('/', function(req, res, next) {
  res.send('If you are seeing this message, then API is working properly');
});

module.exports = router;
