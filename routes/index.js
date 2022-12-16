const express = require('express');
const router = express.Router();


router.get("/", (req,res) => {
    res.send("Página principal. Acesse /questoes ou /users");
});

module.exports = router;