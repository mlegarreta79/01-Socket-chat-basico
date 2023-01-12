//Servidor de express
const express = require('express');
//servisor de sockets
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');


class Server  {
    constructor() {
        this.app = express();;
        this.port = process.env.PORT;

        //Htpp Server
        this.server = http.createServer(this.app);

        //configuracion del socket server
        this.io = socketio(this.server, { /*Configuraciones */});

    }

    middlewares() {
        //desplegar el directorio publica
        this.app.use(express.static(path.resolve(__dirname,'../public')));
    }

    configurarSockets() {
        new Sockets(this.io);
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