const { ServiceBusClient } = require('@azure/service-bus')

const connectionString = process.env.CONNECTION_STRING
const topicName = process.env.TOPIC_NAME
const subscriptionName = process.env.SUBSCRIPTION_NAME
const sbClient = new ServiceBusClient(connectionString)

const receiver = sbClient.createReceiver(topicName, subscriptionName)

const receiveMessage = async () => {
  const myMessageHandler = async (messageReceived) => {
    console.log(`New email subscriber: ${messageReceived.body.firstName} ${messageReceived.body.lastName}`)
    // await saveNewSubscriber(messageReceived)
  }

  const myErrorHandler = async (error) => {
    console.log(error)
  }

  receiver.subscribe({
    processMessage: myMessageHandler,
    processError: myErrorHandler
  })
}

const stopReceive = async () => {
  await receiver.close()
  await sbClient.close()
}

module.exports = { receiveMessage, stopReceive }
