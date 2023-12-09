function calificar(estrellas){
    console.log ("se ha seleccionado estrella:",estrellas);
    alert(`gracias por calificar con ${estrellas} estrellas`);
}

///agregar productos


const productos = [
    {id:1, nombre:'peras', precio: 20},
    {id:2, nombre:'manzanas', precio: 30},
    {id:3, nombre:'naranja', precio: 15}
];

function renderizarProductos(listaProductos){
    const listaProductosDiv = document.getElementById("listaProductos");
    listaProductosDiv.innerHTML = '';
    const lista = document.createElement("ul");

    listaProductos.forEach(producto => {
        const item = document.createElement("li");
        item.textContent = `${producto.nombre} - ${producto.precio}`;
        lista.appendChild(item)
    })

    listaProductosDiv.appendChild(lista);
}

function agregarProductos(){
    const nuevoProductoNombreInput = document.getElementById("nuevoProductoNombreInput");
    const nuevoProductoPrecioInput = document.getElementById("nuevoProductoPrecioInput");
    
    const nuevoProductoNombre = nuevoProductoNombreInput.value.trim();
    const nuevoProductoPrecio = parseFloat(nuevoProductoPrecioInput.value);

    if (nuevoProductoNombre !== '' && !isNaN(nuevoProductoPrecio) ){
        const nuevoProducto = {id: productos.length + 1, nombre: nuevoProductoNombre, precio: nuevoProductoPrecio};
        
        const productoActualizado = [...productos, nuevoProducto];
        renderizarProductos(productoActualizado);
    }
    
    nuevoProductoNombreInput.value = '';
    nuevoProductoPrecioInput.value = '';
}

renderizarProductos(productos);