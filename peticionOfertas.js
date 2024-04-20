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
function compras(compra){
 // Leer el contenido actual del archivo 'compras.json' (si existe)
 let contenidoExistente = '';
 if (fs.existsSync('./compras.json')) {
     contenidoExistente = fs.readFileSync('./compras.json', 'utf8');
     //console.log(contenidoExistente);
 }

 // Verificar si el contenido existente está vacío o no es un JSON válido
 let arrayJSON = [];
 if (contenidoExistente.trim() !== '') {
     try {
         arrayJSON = JSON.parse(contenidoExistente);
     } catch (error) {
         console.error('Error al analizar el contenido existente:', error);
         res.status(500).send('Error interno del servidor');
         return;
     }
 }
 // Determinar el número de compra a asignar
 let numeroCompra = 1;
 if (arrayJSON.length > 0) {
     const ultimoCompra = arrayJSON[arrayJSON.length - 1];
     numeroCompra = ultimoCompra.numeroCompra + 1;
 }

 // Asignar el número de compra al objeto 'compra'
 compra.numeroCompra = numeroCompra;


 // Agregar el nuevo objeto JSON al array
 arrayJSON.push(compra);

 // Convertir el array actualizado a JSON
 let nuevoContenido = JSON.stringify(arrayJSON,null,2);

 // Escribir el nuevo contenido en el archivo 'compras.json'
 fs.writeFileSync('./compras.json', nuevoContenido, 'utf8', (err) => {
     if (err) {
         console.error('Error al guardar en compras.json:', err);
         res.status(500).send('Error interno del servidor');
         return;
     }
     console.log('Datos de compra guardados correctamente en compras.json');
 });
}



  // Exportar el array de objetos para que esté disponible en otros módulos
  module.exports = {activarPeticion,arregloConOfertas,compras};




