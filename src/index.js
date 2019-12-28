const express = require("express");

const server = express();

server.use(express.json());

const routes = require("./routes")(server);

server.listen(3000);
