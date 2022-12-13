const nodemailer = require("nodemailer");
const fs = require("fs");
var transport = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: "apikey",
    pass: "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",
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
    let content = fs.readFileSync(__dirname + "/contact-form-template.html");
    // console.log(new Buffer.from(content).toString());
    let mailOptions = {
      from: req.body.email,
      to: "chrisdietrich366@yahoo.com",
      subject: `Contact form from ${req.body.firstName} ${req.body.lastName}`,
      text: req.body.message,
      html: "hello",
    };
    // console.log(mailOptions)
    // transport.verify(function (error, success) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Server is ready to take our messages");
    //   }
    // });
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
