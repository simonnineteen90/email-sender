module.exports = {
    from: process.env.EMAIL_ADDRESS, // sender address
    to: "emailfrom@servicebus.com", // list of receivers get this from the SB message
    subject: "Welcome", // Subject line
    text: "Welcome email", // plain text body
    html: "<b>Welcome email</b>", // html body
  }