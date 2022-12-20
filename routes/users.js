var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

router.get("/", usersController.list);

router.post('/create', usersController.create);
router.get('/:usersId', usersController.showUser);
router.put('/update/:usersId', usersController.update);
router.delete('/delete/:usersId', usersController.delete);

module.exports = router;
