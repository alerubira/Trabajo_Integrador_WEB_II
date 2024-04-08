const traductor=require('node-google-translate-skidz');
let arregloConOfertas=[];
let productos=[];
function recibir(arreglo){
    arregloConOfertas=arreglo;
}
function procesarProductos(listaP){

    
    console.log(arregloConOfertas);
    listaP.forEach((element) => {
      
        //imagen del producto, título, descripción (máximo 30 caracteres), categoría y precio. 
        let producto={};
          producto.id=element.id;
          producto.imagen=element.image;
          producto.titulo= element.title;
          producto.categoria=element.category;
          producto.precio=element.price;
          producto.descripcion=element.description;
          productos.push(producto);
        
        
      
      });
      return productos;
}
module.exports={procesarProductos,recibir};
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