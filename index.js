const express = require('express');
const app = express();

// Configurar una ruta para mostrar "Hola Mundo"
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

// Escuchar en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

