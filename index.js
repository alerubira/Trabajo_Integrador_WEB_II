
//const moduloDom=require('./dom.js')
const conectar=require('./conexxion.js');
const traductor=require('node-google-translate-skidz');
const axios = require('axios');
let productos=[];


  function traducir(texto){
    let traducido;
    traductor({
      text: texto,
      source: 'en',
      target: 'es'
    }, function(result) {
      traducido= result.translation;
      return traducido;
      console.log(traducido);
     
     
    });
    return traducido;
  }
   

/*function traducir(texto) {
  return new Promise((resolve, reject) => {
    traductor({
      text: texto,
      source: 'en',
      target: 'es'
    }, function(result) {
      const traducido = result.translation;
      console.log(traducido);
      resolve(traducido);
    });
  });
}

// Para utilizar la función traducir:
async function miFuncion(texto) {
  const textoTraducido = await traducir(texto); // 'Hello' es el texto que quieres traducir
  console.log(textoTraducido); // Aquí puedes hacer lo que quieras con el texto traducido
}*/

//miFuncion("love"); // Llamamos a la función async para ejecutarla



  


// Hacer una solicitud GET
axios.get('https://fakestoreapi.com/products')
  .then(response => {
    // Manejar la respuesta exitosa
   
    response.data.forEach((element) => {
      //traducir(element.title);
      //imagen del producto, título, descripción (máximo 30 caracteres), categoría y precio. 
      let producto={};
        producto.id=element.id;
        producto.imagen=element.image;
        producto.titulo=traducir( element.title);
       // producto.categoria=traducir(element.category);
        producto.precio=element.price;
        //producto.descripcion=traducir(element.description);
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
  /*async function obtenerProductos() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const productos = [];
  
      await Promise.all(response.data.map(async (element) => {
        let producto = {};
        producto.id = element.id;
        producto.imagen = element.image;
        try {
          // Esperar la traducción del título de forma síncrona
          producto.titulo = await traducir(element.title);
        } catch (error) {
          console.error('Error al traducir el título:', error);
          // En caso de error, asignar un valor predeterminado al título
          producto.titulo = 'Título no disponible';
        }
       // producto.titulo = await traducir(element.title);
        // producto.categoria = await traducir(element.category);
        producto.precio = element.price;
        // producto.descripcion = await traducir(element.description);
        productos.push(producto);
      }));
  
      console.log('Respuesta exitosa:');
      return productos;
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
      throw error;
    }
  }
  
  // Llamada a la función
  async function main() {
    try {
      const productos = await obtenerProductos();
      console.log('Productos obtenidos:', productos);
      conectar(productos);
    } catch (error) {
      console.error('Error en la ejecución:', error);
    }
  }
  
  main();*/
  
 // console.log(`${traducir('love')}`)
  

