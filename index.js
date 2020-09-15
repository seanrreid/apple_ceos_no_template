"use strict";
const http = require("http");

const hostname = "127.0.0.1";
const port = 3333;

const express = require("express");
const app = express();

const server = http.createServer(app);

// Controllers
const indexController = require("./routes/index"),
    ceosController = require("./routes/ceos");

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

app.use("/", indexController);
app.use("/ceos", ceosController);