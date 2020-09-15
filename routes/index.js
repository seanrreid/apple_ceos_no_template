const express = require("express"),
  router = express.Router();

router.get("/", function (req, res, next) {
    const snippet = `<h1>Hello from the Root Route!</h1>`;
    res.status(200).send(snippet).end();
});

module.exports = router;