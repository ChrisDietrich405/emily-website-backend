const ContactApi = require("../api/contact.js");

module.exports = (app) => {
  //we are exporting the app parameter which is a parameter for an anoynmous function
  app.route("/api/contact").post(ContactApi.sendForm);
};
