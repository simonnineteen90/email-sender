module.exports = {
    from: process.env.EMAIL_ADDRESS, // sender address
    to: process.env.TEST_RECEIVER_EMAIL, // list of receivers get this from the SB message
    subject: "Welcome", // Subject line
    text: "Welcome email", // plain text body
    html: "<b>Welcome email</b>", // html body
  }