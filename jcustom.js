/* obtener referencia a botones */
let btns = document.querySelectorAll("#article-container > div > article > button");

/* agregar escucha de evento click y ejecutar la función */
btns.forEach(btn => {
    btn.addEventListener("click", agregarcarrito);
});

/* método para agregar producto al carrito */
function agregarcarrito(event) {
    /* obtener datos del producto */
    let tituloproducto = event.target.parentElement.querySelector("h3");
    let precioproducto = event.target.parentElement.querySelector("p");
    let imagenproducto = event.target.parentElement.querySelector("img");

    /* obtener referencia al modal */
    let modalcuerpo = document.querySelector("#exampleModal > div > div > div.modal-body");

    /* verificar si el modal está vacío */
    let modalvacio = modalcuerpo.innerHTML.trim() === "";

    /* crear elemento HTML para mostrar datos del producto */
    let productoHTML = document.createElement("div");
    productoHTML.innerHTML = "<h3>" + tituloproducto.innerHTML + "</h3><p>" + precioproducto.innerHTML + "</p>";
    productoHTML.appendChild(imagenproducto.cloneNode(true));

    /* agregar elemento HTML al modal */
    modalcuerpo.appendChild(productoHTML);

    /* actualizar el mensaje del modal si no está vacío */
    if (!modalvacio) {
        document.querySelector("#exampleModal > div > div > div.modal-body > p").innerHTML = "Estos son sus productos: ";
    }

    

}

/* obtener referencia al botón Limpiar */
let btnLimpiar = document.querySelector("#exampleModal button.btn-secondary");

/* agregar escucha de evento click y ejecutar la función */
btnLimpiar.addEventListener("click", limpiarCarrito);

/* método para limpiar el carrito */
function limpiarCarrito() {
    /* obtener referencia al modal */
    let modalcuerpo = document.querySelector("#exampleModal > div > div > div.modal-body");

    /* vaciar el contenido del modal */
    modalcuerpo.innerHTML = "<p>Su carrito está actualmente vacío.</p>";
}
