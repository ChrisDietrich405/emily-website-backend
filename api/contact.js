class ContactApi {
  sendForm(req, res) {
    console.log(req.body);
  }
}

module.exports = new ContactApi();
