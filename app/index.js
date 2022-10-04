require('dotenv').config()

const sendEmail = require('./email/send-email')
const welcomeEmailBody = require('./email/welcome-email-body')
const { receiveMessage } = require('./messaging/receive-message')

module.exports = (async () => {
  console.log('test')
  try {
    await receiveMessage()
  } catch (err) {
    console.error('Something went wrong!', err)
  }
})()