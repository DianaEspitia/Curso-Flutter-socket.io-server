const {io} = require('../index');

//Sockets messages
// client - dispositivo que se conecta al socket
io.on('connection', client => {
    console.log('Cliente conectado');
    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
    client.on('mensaje', (payload) => {
        console.log('Mensaje de', payload)
    });
    client.emit('mensaje', {admin: 'Nuevo mensaje' });
});