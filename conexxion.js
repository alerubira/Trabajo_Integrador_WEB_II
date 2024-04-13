
const express = require('express');
const path = require('path');
const pug = require('pug');
const app = express();
// Middleware para procesar el cuerpo de la solicitud como JSON
app.use(express.json());

// Función para conectar al servidor
function conectar(productos) {
    
   // const productos=require('./index.js');

    // Configuración para servir archivos estáticos
    app.use(express.static(path.join(__dirname, 'public')));

    // Ruta para manejar la solicitud GET de '/'
    /*app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'vista.html'));
    });*/
    app.get('/', (req, res) => {
        // Compilar el archivo Pug a HTML
        const html = pug.renderFile(path.join(__dirname, 'public', 'vistaP.pug'),{productos:productos});
        
        // Enviar el HTML compilado como respuesta
        res.send(html);
    });
    //pasar a post cuando venga el aaray de objetos,(carrito)
    app.post ('/carrito', (req, res) => {
        // Obtener el array de objetos JavaScript enviado desde el cliente
         const carrito = req.body.carrito;
        console.log(carrito);
        // Compilar el archivo Pug a HTML
        //, { carrito: carrito }
        const htmlC = pug.renderFile(path.join(__dirname, 'public', 'vistaCarrito.pug'),{carrito:carrito});
        // Enviar el HTML compilado como respuesta
        res.send(htmlC);
    });
    

    // Manejo de errores
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Error interno del servidor');
    });

    // Configuración del puerto
    //const PORT = process.env.PORT || 3000;
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
    });
}

// Exporta la función conectar
module.exports = conectar;
