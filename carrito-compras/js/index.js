//1) mostrar los productos de forma dinamica
// 2) agregar productos al carrito
//3 ) vamos a ver como evitar la carga de productos repetidos
// 4) mostrar el carrito en  HTML
// 5) eliminar los productos

// 

class Producto{
    constructor(id,nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1; //cada vez que se crea un producto va a nacer con valor 1
    }
}

const HAMBURGUESA= new Producto(1,"burguer",3000,"../assets/burguer.png");
const ENSALADA = new Producto(2,"ensalada",2500,"../assets/salad.png");

//creamos array que recibe productos

const PRODUCTOS = [HAMBURGUESA, ENSALADA]; 

//crear un array de carrito

let carrito = [];

console.log(PRODUCTOS)

// modificar dom

const CONTENEDOR_PRODUCTOS = document.getElementById("contenedorProductos");

//crear una funcion la muestre los productos en stock

const MOSTRAR_PRODUCTOS = () =>{
    //ITERAMOS SOBRE UN FOREACH
    PRODUCTOS.forEach(producto =>{
        const card = document.createElement("div");
        //propiedades css
        card.classList.add("col-xl-3", "col-md-6","col-sm-12");
        card.innerHTML = 
        `
            <div class="card">
                <img src="${producto.img}" class="card-img-tom imgProducto" />
                <div class="card-body">
                    <h2>${producto.nombre}</h2>
                    <p>${producto.precio}</p>
                    <button class="btn colorBoton" id="boton${producto.id}">agregar Producto</button>
                </div>
            </div>
        `
        CONTENEDOR_PRODUCTOS.appendChild(card);
        
        //AGREGAMOS PRODUCTOS AL CARRITO
            const BOTON = document.getElementById(`boton${producto.id}`)
            BOTON.addEventListener("click", ()=>{
                agregarAlCarrito(producto.id);
    });

    })
}

MOSTRAR_PRODUCTOS();

//crear funcion de agregar carrito

const agregarAlCarrito = (id) =>{
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    } else{
        const producto = PRODUCTOS.find(producto => producto.id === id)
        carrito.push(producto);
    }

    console.log(carrito);
}

//// conentedor carrito

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", ()=>{
    mostrarCarrito();
})

const mostrarCarrito = () =>{

    contenedorCarrito.innerHTML = " ";

    carrito.forEach(producto =>{
        const card = document.createElement("div");
        //propiedades css
        card.classList.add("col-xl-3", "col-md-6","col-sm-12");
        card.innerHTML = 
        `
            <div class="card">
                <img src="${producto.img}" class="card-img-tom imgProducto" />
                <div class="card-body">
                    <h2>${producto.nombre}</h2>
                    <p>${producto.precio}</p>
                    <p>${producto.cantidad}</p>
                    <button class="btn colorBoton" id="eliminar${producto.id}">Eliminar Producto</button>
                </div>
            </div>
        `
        contenedorCarrito.appendChild(card);
        
        //eliminar el productoeliminar
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click",()=>{
            eliminarDelCarrito(producto.id)
        })

    })
}

//funcion que va a eliminar el producto

const eliminarDelCarrito = (id) => {
    //buscar el producto a eliminar
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice,1);
    mostrarCarrito();
}