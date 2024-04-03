
const express = require('express');
const path = require('path');

// Función para conectar al servidor
function conectar() {
    const app = express();

    // Configuración para servir archivos estáticos
    app.use(express.static(path.join(__dirname, 'public')));

    // Ruta para manejar la solicitud GET de '/'
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'vista.html'));
    });

    // Manejo de errores
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Error interno del servidor');
    });

    // Configuración del puerto
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
    });
}

// Exporta la función conectar
module.exports = conectar;
