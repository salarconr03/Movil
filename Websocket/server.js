const express = require('express');
const http = require('http');
const WebSocket = require('ws');

// Crear una instancia de Express.
const app = express();

// Crear un servidor HTTP utilizando Express.
const server = http.createServer(app);

// Configurar un servidor WebSocket usando la biblioteca 'ws'.
const wss = new WebSocket.Server({ server });

// Cuando un cliente se conecta al servidor WebSocket.
wss.on('connection', (ws) => {
    console.log('Cliente conectado');

    // Manejar los mensajes entrantes desde los clientes.
    ws.on('message', (message) => {
        // Convierte el mensaje a una cadena de texto.
        const textMessage = message.toString();

        // Envia el mensaje a todos los clientes conectados, excepto al remitente.
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(textMessage);
            }
        });
    });
});

// Inicia el servidor en el puerto 3000.
server.listen(3000, () => {
    console.log('Servidor en ejecución en el puerto 3000');
});
