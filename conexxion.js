
const express = require('express');
const path = require('path');
const pug = require('pug');
const app = express();
//const fs = require('fs');
const compras= require('./peticionJson');
// Middleware para procesar el cuerpo de la solicitud como JSON
app.use(express.json());
//app.set('view engine', 'pug');
//app.set('views', path.join(__dirname, 'vistas'));
// Función para conectar al servidor
function conectar(productos) {
    
   // const productos=require('./index.js');

    // Configuración para servir archivos estáticos
    app.use(express.static(path.join(__dirname, 'public')));

    // Ruta para manejar la solicitud GET de '/'
    /*app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'vista.html'));
    });*/
     //pasar a post cuando venga el aaray de objetos,(carrito)
    // app.post ('/carrito', (req, res) => {
    // Obtener el array de objetos JavaScript enviado desde el cliente
      // let carrito = req.body.carrito;
       //console.log(carrito);
    // Compilar el archivo Pug a HTML
    //, { carrito: carritox }
        //const htmlC = pug.renderFile(path.join(__dirname, 'public', 'vistaCarrito.pug'), { carrito: carrito });
    //console.log(htmlC)
    // Enviar el HTML compilado como respuesta
      //res.send(htmlC);
     //res.redirect('/carrito');
   
     // res.setHeader('Content-Type', 'text/html');
     // res.status(200).send(htmlC);
     //});

   

app.post('/compra', (req, res) => {
    // Obtener el array de objetos JavaScript enviado desde el cliente
    let compra = req.body.compra;

    // Convertir la variable 'compra' a JSON
    //let compraJSON = JSON.stringify(compra);
     compras.compras(compra);
   

    // Compilar el archivo Pug a HTML
    //const htmlCom = pug.renderFile(path.join(__dirname, 'public', 'vistaCompra.pug'));

    // Enviar el HTML compilado como respuesta
    //res.send(htmlCom);
    res.status(200).send('Compra guardada correctamente.');
});

   /*  app.get('/carrito', (req, res) => {
        const carrito = req.query.carrito;
    // Aquí renderiza la vista de carrito o envía la página HTML del carrito
    const htmlCom = pug.renderFile(path.join(__dirname, 'public', 'vistaCarrito.pug'),{carrito:carrito});

    // Enviar el HTML compilado como respuesta
    res.send(htmlCom);
         
       });*/

    

   
    app.get('/', (req, res) => {
        // Compilar el archivo Pug a HTML
        const html = pug.renderFile(path.join(__dirname, 'public', 'vistaP.pug'),{productos:productos});
        
        // Enviar el HTML compilado como respuesta
        res.send(html);
    });
    
     app.get('/carrito', (req, res) => {
       
        const html = pug.renderFile(path.join(__dirname, 'public', 'vistaCarrito.pug'));
        
        // Enviar el HTML compilado como respuesta
        res.send(html);
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
