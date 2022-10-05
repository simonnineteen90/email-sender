const createEmail = (receiverEmailAddress) => {
  return {
    from: process.env.EMAIL_ADDRESS, // sender address
    to: receiverEmailAddress, // list of receivers get this from the SB message
    subject: 'Welcome', // Subject line
    text: 'Welcome email', // plain text body
    html: '<b>Welcome email</b>' // html body
  }
}

module.exports = createEmail
