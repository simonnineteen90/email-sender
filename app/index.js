require('dotenv').config()
const { receiveMessage } = require('./messaging/receive-message')

module.exports = (async () => {
  console.log('test')
  try {
    await receiveMessage()
  } catch (err) {
    console.error('Something went wrong!', err)
  }
})()
