function incrementar(){
    let cantidadProductos=document.getElementsByClassName('tdCantidad');
    let cantidadTotalProductos=document.getElementById('tdCantidadTotal');
    let precioSubTotales=document.getElementsByClassName('tdPrecioSubtotal');
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
       trProducto.querySelector('.tdPrecioSubtotal').textContent=precioSubtotall;
       incrementar();
  }
  incrementar();