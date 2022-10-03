require('dotenv').config()

const sendEmail = require('./email/send-email')
const welcomeEmailBody = require('./email/welcome-email-body')

try {
  sendEmail(welcomeEmailBody)
  
} catch(err) {
  console.log('failed to send', err)
}