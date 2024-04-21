
//const moduloDom=require('./dom.js')
const conectar=require('./conexxion.js');
const axios = require('axios');
const procesarProductos=require('./procesar.js');
const activarPeticion=require('./peticionJson.js');
activarPeticion.activarPeticion();
 let listaP=[];    
// Hacer una solicitud GET
axios.get('https://fakestoreapi.com/products')
  .then(response => {
    // Manejar la respuesta exitosa
    console.log('Respuesta exitosa:');
    
    return procesarProductos.procesarProductos(response.data);
  })
  .then(productos=>{
   // console.log(productos); // Datos de la respuesta

        conectar(productos);
  })
  .catch(error => {
    // Manejar el error
    console.error('Error al hacer la solicitud:', error);
  });
  
  
