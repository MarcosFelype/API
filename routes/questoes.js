var express = require('express');
var router = express.Router();
var questoesController = require('../controllers/questionsController');

router.get("/", questoesController.list);

module.exports = router;
