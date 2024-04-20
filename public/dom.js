
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
                  /*  function irAlCarrito(carrito) {
                     if (carrito.length !== 0) { 
                         // Codificar los datos como parámetros de consulta en la URL
                         let queryString = `?carrito=${encodeURIComponent(JSON.stringify(carrito))}`;
                         // Construir la URL completa con los parámetros de consulta
                         let url = `http://localhost:3000/carrito${queryString}`;
                 
                         // Realizar la solicitud GET
                         fetch(url)
                             .then(response => {
                                 if (!response.ok) {
                                     console.error('Error al acceder al carrito:', response.status);
                                 } else {
                                     // Redirigir al usuario a la página de carrito después de que se complete la solicitud
                                     window.location.href = 'http://localhost:3000/carrito';
                                 }
                             })
                             .catch(error => {
                                 console.error('Error de red:', error);
                             });
                     } else {
                         alert('Su carrito está vacío, no se puede procesar su compra');
                     }
                 }*/
   /*const express = require('express');
const path = require('path');
const app = express();

// Establecer el motor de plantillas Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Ruta para renderizar la vista de carrito
app.get('/carrito', (req, res) => {
    // Obtener el parámetro 'carrito' de la consulta (query) en la URL
    const carrito = req.query.carrito;

    // Renderizar la vista 'vistaCarrito.pug' y pasar el parámetro 'carrito'
    res.render('vistaCarrito', { carrito: carrito });
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor Express en funcionamiento en el puerto 3000');
});*/
/*function irAlCarrito(carrito) {
    if (carrito.length !== 0) { 
     fetch('http://localhost:3000/carrito', {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json'
     },
     body: JSON.stringify({ carrito: carrito })
    })
     .then(response => {
         if (!response.ok) {
         console.error('Error al acceder al carrito:', response.status);
         }/* else {
         // Redirigir al usuario a la página de carrito después de que se complete la solicitud
           window.location.href = 'http://localhost:3000/carrito';
       }
       console.log(response);
      })
         .catch(error => {
           console.error('Error de red:', error);
       });
      } else {
              alert('Su carrito está vacío, no se puede procesar su compra');
             }
      }*/
      //localstorage

                                   