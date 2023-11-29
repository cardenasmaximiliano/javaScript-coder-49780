//template literal => es una mas moderna de concatenar.
//la vamos a estar utilizando porque es mas legible facil y tangible de manejar.

// let nombre = "juna";
// let edad = 33;

// console.log("su nombre es: "+  nombre +" y tiene"+ edad);

// console.log(`hola gente soy ${nombre} y tengo ${edad} de edad`);

//Existen varias formas de acceder al DOM pero se utilizan 5 que son importantes.



//ID = getElementById("nombre del id") => metodo del objeto del documento que se utiliza para seleccion y recuperar un elemento de HTML del DOM
const TITULO = document.getElementById("tituloPrincipal");
console.log(TITULO)

//CLASES = getElementsByClassName("")=> metodo que se utiliza para captar los elementos de HTML que posean clases
const NOMBRES = document.getElementsByClassName("nombres");
console.log(NOMBRES)

//tag = getElementsByTagName("") => metodo que se utiliza para captar las etiquetas

let etiqueta = document.getElementsByTagName("li");
console.log(etiqueta);

//querySelector => nos permite seleccionar nodos con la misma sintaxis que css

let queryNombres = document.querySelector (".nombres");
console.log(queryNombres);

//querySelectorAll => es lo mismo que querySelector solamente que trae todo
let queryNombresAll = document.querySelectorAll (".nombres");
console.log(queryNombresAll);

//Modificar nodos

//innerText => no es mas que una propiedad, en la cual nosotros vamos a poder acceder 
//a texto visible dentro de un elemento, omitiendo cualquier contenido de HTML

TITULO.innerText = "estoy jugando con innerText";

//innerHTML => se utiliza para obtener o establecer contenido HTML interno de un elemento.
//innerHTML incluye todas las etiqueta de HTML.
//lo cual nos permite agregar HTML desde JS.

const DIV_NUEVO = document.getElementById("divContenedor");

DIV_NUEVO.innerHTML = `<div class="pepito">
                            <p>nombre</p>
                            <p>precio</p>
                            <button>Agregar carrito</button>
                        </div>`;

//Agregar Nodos desde Js

//createElement("") => a traves de este metodo podemos crear nuevos elementos directamente desde js

// variable = document.createElement(nombre del elemento);

let parrafo = document.createElement("h3");

parrafo.textContent ="hola, este parrafo lo cree desde Js";

document.body.appendChild(parrafo);

//objetos dinamicos

class Producto{
    constructor(nombre, precio, img){
        this.marca = nombre;
        this.precio= precio;
        this.img = img;
    }

}

const MOTHER = new Producto("asus", 30000,"asus.jpg");
const MOUSE = new Producto("logitech", 5000,"asus.jpg");
const TECLADO = new Producto("hyperX", 12000,"asus.jpg");
const PAD = new Producto("hyperX", 4000,"asus.jpg");

const ArrayProductos = [MOTHER, MOUSE, TECLADO,PAD];

ArrayProductos.forEach(Producto =>{
    let div= document.createElement("div");
    div.className ="card";
    // div.innerHTML = `
    //                 <p>nombre: ${Producto.marca} </p>
    //                 <p>Precio: ${Producto.precio} </p>
    //                 <img src= "${Producto.img}"/>
    //                 <button>Agregar a carrito</button>
    // `

    div.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${Producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${Producto.marca}</h5>
      <p class="card-text">${Producto.precio}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    
    `
    contenedorProductos.appendChild(div);
})  

