function incrementar(){
    let cantidadProductos=document.getElementsByClassName('tdCantidad');
    let cantidadTotalProductos=document.getElementById('tdCantidadTotal');
    let precioSubTotales=document.getElementsByClassName('tdPrecioSubTotal');
    let precioTotal=document.getElementById('tdPrecioTotal');
    let total=0;
    for(cant of cantidadProductos){
          total +=parseInt(cant.textContent);
    }
    cantidadTotalProductos.textContent=total;
    total=0;
    for(cant of precioSubTotales){
      total+=parseFloat(cant.textContent);
    }
    precioTotal.textContent=total;
  }
  function agregar(trProducto,sumar){
       let cantidad = parseInt(trProducto.querySelector('.tdCantidad').innerText);
       cantidad=sumar?cantidad +1 : cantidad -1;
       let precio= parseFloat(trProducto.querySelector('.tdPrecio').innerText);
       let precioSubtotall=precio*cantidad;
       trProducto.querySelector('.tdCantidad').textContent=cantidad;
       trProducto.querySelector('.tdPrecioSubTotal').textContent=precioSubtotall;
       incrementar();
  }
  incrementar();
  function comprar(){
    let compra={};
    let productosCompra=[];
    let producto={};
    let cantidadTotalProductos=document.getElementById('tdCantidadTotal');
    let precioTotal=document.getElementById('tdPrecioTotal');
    compra.cantidadTotalProductos=parseInt(cantidadTotalProductos.innerText);
    compra.precioTotal=parseFloat(precioTotal.innerText);
    let trProducto=document.getElementsByClassName('trProducto');
    for(prod of trProducto){
        producto.cantidad=parseInt(prod.querySelector('.tdCantidad').innerText);
        if(producto.cantidad>0){
          producto.codigo=prod.querySelector('.tdCodigo').innerText;
          producto.titulo=prod.querySelector('.tdTitulo').innerText;
          producto.precio=prod.querySelector('.tdPrecio').innerText;
          producto.precioST=prod.querySelector('.tdPrecioSubTotal').innerText;
          productosCompra.push(producto);
          producto={};
        }
        }
    compra.productosComprados=productosCompra;
    console.log(compra);
    if(compra.productosComprados.length!==0){ 
    enviarCompra(compra);
    }else{
         alert('Su compra no tiene productos');
  }
  }
  function enviarCompra(compra) {
    fetch('/compra', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ compra: compra })
    })
    .then(response => {
        if (!response.ok) {
            console.error('Error al acceder a la Compra:', response.status);
        }
    })
    .catch(error => {
        console.error('Error de red:', error);
    });
}
