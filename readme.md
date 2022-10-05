### About
One of three microservices used to capture email addresses of new subscribers from a web frontend then save user details to a postgres db and send a welcome email.  
  
This service is the email sender and uses nodemailer to send an email when an Azure Service Bus message is received.

### Requirements
Run the other two services
Valid service bus topic/subscriptions and env variables must be set

### Start the app
node app/index.js


