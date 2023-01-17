//Servidor de express
const express = require('express');
const app = express();

//servisor de sockets
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const cors = require('cors');
const Sockets = require('./sockets');
const twilio = require('./twilio');
var router = express.Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const { CustomerProfilesChannelEndpointAssignmentContext } = require("twilio/lib/rest/trusthub/v1/customerProfiles/customerProfilesChannelEndpointAssignment");
const { runInThisContext } = require('vm');




class Server  {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
 

        //Htpp Server
        this.server = http.createServer(this.app);
        this.twilio = twilio;

        //configuracion del socket server
        this.io = socketio(this.server, { transports: ['websocket', 'polling', 'flashsocket'], cors: '*.*' });
        //this.io.emit('emitiendo desde clase');
        //this.io.cors()
        this.sockets = new Sockets(this.io);
    }

    nuevoReporte() {
        console.log('emitir en socket');
    }

    middlewares() {
        //desplegar el directorio publica
    //    this.app.use(express.static(path.resolve(__dirname,'../public')));

        //CORS
 
 
        
    }

    

    configurarSockets() {
     //   new Sockets(this.io);
    }

    execute() {
        //Inicializar middlewares
        this.middlewares();

        //Inicializar sockets
        this.configurarSockets();

        //Inicializar server
        this.server.listen(this.port, () => {
            console.log('servidor corriendo en puerto ', this.port);
        });
    }

}

module.exports = Server;