const Server = require("./models/server");
const Sockets = require("./models/sockets");
const twilio = require('./models/twilio');
const cors = require('cors');
const express = require('express');

const MessagingResponse = require('twilio').twiml.MessagingResponse;
const { CustomerProfilesChannelEndpointAssignmentContext } = require("twilio/lib/rest/trusthub/v1/customerProfiles/customerProfilesChannelEndpointAssignment");

require('dotenv').config();
const server = new Server();
server.execute();

server.app.use(cors());
server.app.use(express.urlencoded({ extended: true }));
server.app.post("/webhook", function (req, res) {
    server.io.emit('nuevo-reporte');
    console.log('emitir desde aqui');
   // console.log(req.body);
 //   console.log("req ->", req.body);
    twilio.sendTextMessage(req.body.WaId, req.body.Body);
    res.status(200).json({ ok: true, msg: "Mensaje enviado correctamente hook en contrsuctor" });
  });




