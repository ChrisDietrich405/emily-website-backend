const cors = require("cors");

const express = require("express"),
  app = express(),
  consign = require("consign");

app.use(cors());
app.use(express.json());

consign({extensions: [ '.js', '.json', '.node' ] }) 
  .include("routes") //routes, infra and app will be folders
  .then("infra") //and consign is a library used with express
  .then("api") //to help us build necessary folders
  .into(app);

module.exports = app;
