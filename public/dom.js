
let divProductos=document.getElementById("divProductos");

mostrar=function mostrarProductos(lista){
    if(lista){
        lista.forEach(elemento => {
            let divNombre=document.createElement("div");
            divNombre.textContent=elemento.title;
            let divCarta=docoment.createElement("div");
            divCarta.classList.add("divCarta");
            divCarta.appendChild(divNombre);
            divProductos.appendChild(divNombre);
    });
    

    }else{
             alert("la listade productos esta vacia");
    }
}
module.exports=mostrar;
/*tbody
             
each producto in carrito    
tr
td producto.codigo
td producto.titulo
td producto.precioFinal
td producto.cantidad
td producto.precioSubtotal*/
/*tbody
            tr.trProducto
              td.tdCodigo 3
              td.tdTitulo pantalon 
              td.tdPrecio 55
              td.tdCantidad 1
              td  
                 button(type="button", onclick="agregar(this.parentNode.parentNode,true)") +++
              td 
                 button(type="button", onclick="agregar(this.parentNode.parentNode,false)") ---
              td.tdPrecioSubTotal 55
            tr.trProducto
              td.tdCodigo 6
              td.tdTitulo remera
              td.tdPrecio 45
              td.tdCantidad 1
              td  
                 button(type="button", onclick="agregar(this.parentNode.parentNode,true)") +
              td 
                 button(type="button", onclick="agregar(this.parentNode.parentNode,false)") -
              td.tdPrecioSubTotal 45*/
              /*tr
              td ------
              td ------
              td cantidad total
              td#tdCantidadTotal 
              td -------
              td Precio Final
              td#tdPrecioTotal */
              /*tbody
             
                  each producto in carrito    
                    tr
                    td producto.codigo
                    td producto.titulo
                    td producto.precioFinal
                    td producto.cantidad
                    td producto.precioSubtotal*/
                    //script(src="./domCarrito.js", defer)