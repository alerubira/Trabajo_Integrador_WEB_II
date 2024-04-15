
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