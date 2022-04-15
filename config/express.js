const express = require("express"),
  app = express(),
  consign = require("consign");

app.use(express.json());

consign()
  .include("routes") //routes, infra and app will be folders
  .then("infra") //and consign is a library used with express
  .then("api") //to help us build necessary folders
  .into(app);

module.exports = app;
