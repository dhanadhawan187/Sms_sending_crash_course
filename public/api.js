var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

//nexmo details
const Nexmo = require("nexmo");
const apikey = "30099532";
const secret_key = "lf4xLl1AlDwb0Ooj";
const from = "Vonage SMS API";
const nexmo = new Nexmo({
  apiKey: apikey,
  apiSecret: secret_key
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
router.get("/", function(req, res) {
  res.send("GET route on things.");
});
router.post("/", function(req, res) {
  //res.send("POST route on things.");
  //nexmo api
  const Number = req.body.Number;
  const Msg = req.body.Text;

  const apikey = "30099532";
  const secret_key = "lf4xLl1AlDwb0Ooj";
  const from = "Vonage SMS API";
  const nexmo = new Nexmo({
    apiKey: apikey,
    apiSecret: secret_key
  });

  nexmo.message.sendSms(from, "91" + Number, Msg);

  console.log(Number, Msg);

  /*
  //twilio api

  // Download the helper library from https://www.twilio.com/docs/node/install
  // Your Account Sid and Auth Token from twilio.com/console
  // DANGER! This is insecure. See http://twil.io/secure
  const accountSid = "AC7278db008fdf5c3f656b3db53be12f63";
  const authToken = "3da3a57a1905a602c42cad78ce86bdda";
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: Msg,
      from: "+19148734865",
      to: "91" + Number
    })
    .then(message => console.log(message.sid));
  res.send("Msg Send Sucessfully");
  */
});

//export this router to use in our index.js
module.exports = router;
