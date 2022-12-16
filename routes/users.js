var express = require('express');
var router = express.Router();

router.get("/", usersController.list);

router.post("/create/", usersController.create);

router.post("/:usersId/update/", usersController.edit);

router.post("/:usersId/delete/", usersController.delete);

module.exports = router;
