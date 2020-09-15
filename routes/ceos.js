const express = require("express"),
  router = express.Router(),
  ceoModel = require("../models/ceoModel");

router.get("/", async (req, res, next) => {
  const executiveData = await ceoModel.getAll();
  let snippet = `<h1>Hello from the CEOs Route!</h1>`;
  snippet += `<ul>`;
  executiveData.map((executive) => {
    snippet += `<li>${executive.name}</li>`;
  });
  snippet += `</ul>`;
  res.status(200).send(snippet).end();
});

module.exports = router;
