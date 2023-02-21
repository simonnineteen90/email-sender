const nodemailer = require('nodemailer')

const sendEmail = async (emailContent) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount()

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_ADDRESS, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD // generated ethereal password
    }
  })

  // send mail with defined transport object
  const info = await transporter.sendMail(emailContent)

  console.log('Message sent: %s', info.messageId)
}

module.exports = sendEmail
