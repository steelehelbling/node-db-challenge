const express = require("express");

const recipeRouter = require("./api-router");

const server = express();

server.use(express.json());
server.use("/api", recipeRouter);

module.exports = server;
