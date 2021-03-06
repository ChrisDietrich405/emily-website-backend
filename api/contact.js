const nodemailer = require("nodemailer");
const fs = require("fs");
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "fb4e361370b4e6",
    pass: "be414bfafbc4e5",
  },
});

// TO USE GMAIL UNCOMMENT THIS AND REMOVE TRANSPORT BELOW
// const transport = nodemailer.createTransport({
//     host: "gmail",
//     port: 2525,
//     auth: {
//       user: "youremail@gmail.com",
//       pass: "yourGmailPassword",
//     },
//   });

class ContactApi {
  sendForm(req, res) {
    let content = fs.readFile("./contact-form-template.html");
    console.log(content);
    var mailOptions = {
      from: req.body.email,
      to: "chrisdietrich366@yahoo.com",
      subject: `Contact form from ${req.body.firstName} ${req.body.lastName}`,
      text: req.body.message,
      html: content,
    };
    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        res.send("email sent successfully!").sendStatus(200);
      }
    });
  }
}

module.exports = new ContactApi();
