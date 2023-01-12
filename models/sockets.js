
class Sockets {
    constructor(io) {
        this.io = io;
        this.socketEvents();
    }
    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => { 
            console.log('cliente conectado', socket.id);
        
            //emitir evento
            socket.emit('mensaje-bienvenida',{
                msg: 'Bienvenido al server',
                fecha: new Date()
            });
        
            //escuchar evento
            socket.on('mensaje-cliente', (mensaje) => {
                console.log('mensaje recibido del cliente', mensaje);
            })
            socket.on('mensaje-to-server', (mensaje) => {
                console.log('mensaje recibido del cliente', mensaje);
                this.io.emit('mensaje-from-server', mensaje);
            })
        
            socket.on('guardar', (datos) => {
                fetch('https://raosari.dyndns.info/gruporaosari/servicios/usuarios.php?funcion=usuarios')
                .then(response =>response.json())
                .then(respuesta => {
        
                })
                .catch(error => {
                    console.error(error);
                })
            })
           
        
        });
        
    }
}

module.exports = Sockets;