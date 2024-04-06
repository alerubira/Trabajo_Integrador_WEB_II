
//const moduloDom=require('./dom.js')
const conectar=require('./conexxion.js');
const traductor=require('node-google-translate-skidz');
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
      //traducir(element.title);
      //imagen del producto, título, descripción (máximo 30 caracteres), categoría y precio. 
      let producto={};
      producto.id=element.id;
      producto.imagen=element.image;
      producto.titulo=traducir(element.title);
      producto.categoria=traducir(element.category);
      producto.precio=element.price;
      producto.descripcion=traducir(element.description);
      productos.push(producto);
    });
    console.log('Respuesta exitosa:');
    return productos;
    //moduloDom.mostrar(response.data);
    //productos=response.data; 
    //module.exports=productos;
    //conectar(productos);
  })
  .then(productos=>{
   // console.log(productos); // Datos de la respuesta

        conectar(productos);
  })
  .catch(error => {
    // Manejar el error
    console.error('Error al hacer la solicitud:', error);
  });
  

