//storage

//nos permite guardar datos de manera local en el navegador

//2 maneras de almacenar datos en el navegador

//sessionStorage y localStorage

//localStorage => de los datos se van a almacenar
//de manera indefinida. van a permanecer despues de 
//ser cerradas y abiertas en el navegador. 
//se almacena de manera local.


//sessionStorage => va a almacenar los datos de forma
//temporal. 
// los datos almacenados solamenta van a estar disponibles
//mientras dure la sesion en el navegador. 

//setItem => es un metodo que proporciona el objeto
//localStorage, con esta manera almacenamos los datos de manera local

//localStorage:

localStorage.setItem("saludo","¿HOLA CHICOS COMO ESTAS?");

//almacenar numeros

localStorage.setItem("numero", 1234);

//almacenamos booleanos

localStorage.setItem("boolean", true);

//seteo o setear => estamos guardando un valor

//como recuperamos lo que seteamos 


//getItems => metodo con el cual nosotros recuperamos los valores 
//de las llaves almacenadas en el navegador 

let valor = localStorage.getItem("numero");

console.log(valor);

console.log(typeof valor);

//ALMACENAr UN NUMERO COMO UNA CADENA EN LOCALSTORAGE

localStorage.setItem("numeros", 42);

let numeroComoCadena = localStorage.getItem("numeros");
let numeroComoNumber = parseInt(numeroComoCadena);

console.log(numeroComoNumber);


//sessionStorage => funciona similar a localStorage

// sessionStorage.setItem("nombres", "Emilio");

// let nombresDos = sessionStorage.getItem("nombres");
// console.log(nombresDos);

//removeItem => metodo que nos permite eliminar o remover un elemento.

localStorage.setItem("eliminar","frase a eliminar")

localStorage.removeItem("numero")



//este elimina de manera global todo los datos almacenados
// localStorage.clear()



//recorremos localStorage

// localStorage.setItem("nombre", "juan");
// localStorage.setItem("edad",25);
// localStorage.setItem("ciudad","mar del plata");

// //obtener todas las claves almacenadas en localStorage

// let todasLasClaves = Object.keys(localStorage);

// //recorrer las claves

// for(let i = 0; i <todasLasClaves.length; i++){
//     let clave = todasLasClaves [i];
//     let valor = localStorage.getItem (clave);

//     console.log (clave, valor);
// }

//JSON

//javaScript object notation, es un formato de de intercambio de datos
//ligero y facil leer. 
//Json, es un formato independiente del lenguaje y lo vamos a estar utilizando para representar datos estructurados.

//objeto de personas

// let persona= {
//     nombre:'juan',
//     edad: 25,
//     ciudad: "mar del plata"
// }

//stringify => es una funcion que convierte cualquier objeto en una cadeja de json.
// toma un objeto como argunmento y devuelve una cadena de texto.

// let jsonPersona = JSON.stringify (persona);

// console.log(jsonPersona);

//modo oscuro - modo claro 

// 1 - crear un boton que cambie el metodo de la pagina
// 2 - almacenar el modo seleccionado en el storage
//3 - al recargar la pagina, recumeros el modo 
// cabiamos el modo de la pagina

const botonModo = document.getElementById("botonModo"); 

botonModo.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo","dark");
        
    }else{
        localStorage.setItem("modo", "claro");
    }
});

//carrito de compras

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;

    }
}

const product1 = new Producto ("camisa", 500); 
const product2 = new Producto ("jean", 300); 
const product3 = new Producto ("remera", 400);

const carrito = [];

carrito.push(product1);
carrito.push(product2);
carrito.push(product3);

console.log(carrito);

const carritoJSON = JSON.stringify(carrito);

//almacenando el carrito en el localStorage

localStorage.setItem("carrito", carritoJSON);

//recuperamos el carrito de LocalStorage

const carritoRecuperado = localStorage.getItem("carrito");

//convertir el json en un objeto

const carritoObjeto = JSON.parse(carritoRecuperado);

//imprimir todo en HTML

const contenedorCarrito = document.getElementById("contenedorCarrito");

carritoObjeto.forEach(producto => {
    contenedorCarrito.innerHTML += `
    <p> ${producto.nombre} - ${producto.precio} </p>
    `;

});