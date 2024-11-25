const http = require('http');
const fs = require('fs');
const path = require('path');

// Crear el servidor
const server = http.createServer((req, res) => {
    // Configurar la ruta al archivo index.html
    const filePath = path.join(__dirname, 'index.html');

    // Leer y servir el archivo HTML
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error interno del servidor');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});

// Escuchar en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


