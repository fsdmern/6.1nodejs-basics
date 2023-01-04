const nodemailer = require("nodemailer");

async function sendMail() {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  var mailCompose = await transporter.sendMail({
    from: '"FSD Mern" <fsd.mern@gmail.com>',
    to: "fsd.mern@gmail.com",
    subject: "Test Mail from NodeMailer",
    text: "Hello World. From NodeMailer",
    html: "<b>Hello World. From NodeMailer</b>"
  });

//   var mailOptions1 = {
//     from: "useremail",
//     to: "receiver email",
//     subject: "",
//     html: "<h1>Welcome</h1><p>Mail from Nodemailer</p>",
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email Sent: " + info.response);
//     }
//   });

console.log("Message sent: %s", mailCompose.messageId)
console.log("Preview URL: %s", nodemailer.getTestMessageUrl(mailCompose));
nod

}

sendMail().catch(console.error);
