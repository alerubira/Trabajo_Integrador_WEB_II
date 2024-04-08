const fs = require('fs');



// Leer el contenido del archivo ofertas.json
const archivoOfertas=fs.readFile('public/ofertas.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }
  
  // Manejar el contenido del archivo aquí
 // console.log(data);
  let parseado=JSON.parse(data);
  return parseado;
});
module.exports=archivoOfertas;


