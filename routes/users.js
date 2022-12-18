var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

router.get("/", usersController.list);

router.get("/:usersId", usersController.showUser); //mostra os dados de apenas um usuário (userpage)

router.post("/create/", usersController.create);

router.post("/:usersId/update/", usersController.update);

router.post("/:usersId/delete/", usersController.delete);

module.exports = router;
