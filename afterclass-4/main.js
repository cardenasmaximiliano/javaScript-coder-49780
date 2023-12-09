
    // Lista de productos disponibles
    const productosDisponibles = [
        { id: 1, nombre: 'Producto 1', precio: 10 },
        { id: 2, nombre: 'Producto 2', precio: 20 },
        { id: 3, nombre: 'Producto 3', precio: 30 },
    ];

    // Función para agregar un producto al carrito
    function agregarAlCarrito(id, nombre, precio) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push({ id, nombre, precio });
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
    }

    // Función para mostrar los productos en el carrito
    function mostrarCarrito() {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
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
    }

    // Función para vaciar el carrito
    function vaciarCarrito() {
        localStorage.removeItem('carrito');
        mostrarCarrito();
    }

    // Función para generar tarjetas de productos
    function generarTarjetasProductos() {
        const contenedorProductos = document.getElementById('productos');

        productosDisponibles.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.classList.add('producto');
            productoElement.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio})">Agregar al Carrito</button>
            `;
            contenedorProductos.appendChild(productoElement);
        });
    }

    // Mostrar el carrito y generar las tarjetas al cargar la página
    mostrarCarrito();
    generarTarjetasProductos();
