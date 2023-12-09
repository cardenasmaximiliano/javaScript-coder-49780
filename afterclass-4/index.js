//lista de productos disponibles en mi carrito

const productoDisponibles = [
    {id:1, nombre:"producto 1", precio:10},
    {id:2, nombre:"producto 2", precio:20},
    {id:3, nombre:"producto 3", precio:40}
];

//funcion que agregue porductos a un carrito

function agregarAlCarrito(id,nombre,precio){
    
    const carrito= JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({id, nombre, precio});
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
    
}
;


//funcion mostrar los productos en el carrito

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito'))|| [];
    const listaProductos = document.getElementById('lista-productos');
    const totalElement = document.getElementById('total');
    let total = 0;

    listaProductos.innerHTML = '';

    carrito.forEach(producto => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${producto.nombre}</span>
            <span>$${producto.precio}</span>
        `;
        listaProductos.appendChild(listItem);

        total += producto.precio;

    });

    totalElement.textContent = total;
};
//function para vaciar el carrito

function vaciarCarrito(){
    localStorage.removeItem('carrito');
    mostrarCarrito();

}


//funcion para generar tarjetas de productos

function generarTarjetaProductos(){
    const contenedorProductos = document.getElementById('productos');

    productoDisponibles.forEach(producto =>{
        const productoElement = document.createElement('div');
        productoElement.classList.add('producto');
        productoElement.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.precio} </p>
            <button onclick="agregarAlCarrito(${producto.id},'${producto.nombre}', ${producto.precio})"> agregar al carrito </button>
        `;
        contenedorProductos.appendChild(productoElement);
    })
}

mostrarCarrito();
generarTarjetaProductos();