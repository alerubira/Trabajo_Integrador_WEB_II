const fs = require('fs');
const arreglo=require('./procesar');
let arregloConOfertas;
function activarPeticion(){
  fs.readFile('public/ofertas.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo con las ofertas:', err);
      return;
    }
    
    // Convertir los datos del archivo JSON en un array de objetos JavaScript
     arregloConOfertas = JSON.parse(data);
     
     arreglo.recibir(arregloConOfertas);
     
  });
}



  // Exportar el array de objetos para que esté disponible en otros módulos
  module.exports = {activarPeticion,arregloConOfertas};




