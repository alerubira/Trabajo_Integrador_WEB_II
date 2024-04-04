
const moduloDom=require('./dom.js')
const conectar=require('./conexxion.js');
conectar();
const axios = require('axios');

// Hacer una solicitud GET
axios.get('https://fakestoreapi.com/products')
  .then(response => {
    // Manejar la respuesta exitosa
    productos=response.data;
    console.log('Respuesta exitosa:');
    console.log(response.data); // Datos de la respuesta
    moduloDom.mostrar(response.data);
    
  })
  .catch(error => {
    // Manejar el error
    console.error('Error al hacer la solicitud:', error);
  });
  

