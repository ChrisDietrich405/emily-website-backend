const http = require("http"), //http is a module, native from nodejs
  config = require("./config/config"),
  app = require("./config/express");

const port =
  process.env.NODE_ENV === "production"
    ? config.envProduction.PORT
    : config.envDevelopment.PORT;

http.createServer(app).listen(port, () => {
  console.log("Server running at: " + port);
});
