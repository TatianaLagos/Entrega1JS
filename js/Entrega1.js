
const carrito = [];

function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total");

    listaCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const listItem = document.createElement("li");
        listItem.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(listItem);
    });

    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio;
    });
    totalCarrito.textContent = total;
}

