
//const moduloDom=require('./dom.js')
const conectar=require('./conexxion.js');
const traductor = require('node-google-translate-skidz');
const axios = require('axios');
let productos=[];

function traducir(texto){
  traductor({
    text: texto,
    source: 'en',
    target: 'es'
  }, function(result) {
    //console.log(result.translation);
    return result.translation;
  });
}
  


// Hacer una solicitud GET
axios.get('https://fakestoreapi.com/products')
  .then(response => {
    // Manejar la respuesta exitosa

    response.data.forEach(element => {
      traducir(element.title);

    });
    console.log('Respuesta exitosa:');
    //console.log(productos); // Datos de la respuesta
    //moduloDom.mostrar(response.data);
   productos=response.data; 
    conectar(productos);
  })
  .catch(error => {
    // Manejar el error
    console.error('Error al hacer la solicitud:', error);
  });
  

