const accountSid = "AC5b800428510f7b6033462714de760fab";
const authToken = "fc9b3786a2309d4e63b43914c2bb0e7d";
const client = require("twilio")(accountSid, authToken);

function sendTextMessage(sender, message) {
  return new Promise((resolve, reject) => {
    client.messages
      .create({
        from: "whatsapp:+14155238886",
        body: message,
        to: "whatsapp:+" + sender,
      })
      .then((message) => resolve())
      .catch((err) => reject(err));
  });
}

module.exports = {
  sendTextMessage,
};
