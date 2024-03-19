const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para responder con vista.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'vista.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
