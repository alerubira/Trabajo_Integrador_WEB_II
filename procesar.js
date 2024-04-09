const traductor=require('node-google-translate-skidz');
let arregloConOfertas=[];
let productos=[];

function procesarProductos(listaP){
  
    listaP.forEach((element) => {
      let ofertaEncontrada = arregloConOfertas.find(oferta => oferta.id === element.id);
        //el precio origina, el descuento, el monto descontado y el precio final.  
        let producto={};
        if(ofertaEncontrada){
          producto.precio=element.price;
          producto.descuento=ofertaEncontrada.porcentaje;
          producto.dineroDescontado=dineroDescontados(producto.precio,producto.descuento);
          producto.precioFinal=producto.precio-producto.dineroDescontado;
        }else{
          producto.precio=element.price;
        }
          producto.id=element.id;
          producto.imagen=element.image;
          producto.titulo= element.title;
          producto.categoria=element.category;
          
          producto.descripcion=element.description;
          productos.push(producto);
        
        
      
      });
      return productos;
}
function recibir(arreglo){
    arregloConOfertas=arreglo;
}
module.exports={procesarProductos,recibir};
function dineroDescontados(precio,descuento){

return (precio*descuento)/100;
}
function traducir(texto){
    let traducido;
    traductor({
      text: texto,
      source: 'en',
      target: 'es'
    }, function(result) {
      traducido= result.translation;
      return traducido;
      });
    
  }