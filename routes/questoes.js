var express = require('express');
var router = express.Router();

router.get("/", questoesController.list);

module.exports = router;
