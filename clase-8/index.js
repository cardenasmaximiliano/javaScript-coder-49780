//reduce => metodo de array que nos sirve para reducir los datos de un array 
// a unico. 

// variable = array.reduce(function(acumulador, ArrayRecorrido){
//     return acumulador + arrayRecorrido
// },valorInicialAcumulador);

// let numeros = ["suma","resta","multiplicacion"]; //arrays arrancan con indice 0

// let suma = numeros.reduce(function(acumulador, numero){
//     return acumulador + numero
// });

// console.log(suma);

// const CARRITO = [
//     {producto: 'camiseta', precio:20},
//     {producto: 'pantalon', precio:10},
//     {producto: 'remera', precio:30}
// ]

// //utilizando el  reduce podemos calcular precio de carrito

// let precioTotal = CARRITO.reduce(function(acumulador,producto){
//     return acumulador + producto.precio;


// },0);

// console.log(`el precio total del carrito es: ${precioTotal}`);

//sort => nos va a servir a nosotros para ordenar los elementos de un array.
// sort no crea un nuevo array trabaja sobre el original y lo ordenar

// variable sort = array.sort(function(comparableA, comparableB){
    // return comparableA - comparableB; 
// })

// const CARRITO = [
//     {producto: 'camiseta', precio:20},
//      {producto: 'pantalon', precio:10},
//      {producto: 'remera', precio:30}
//  ];

// let productosOrdenados = CARRITO.sort((a,b) => a.precio - b.precio);

// //de esta manera tenemos los arrays de manera creciente
// console.log(productosOrdenados);

// let array = ["manzana","fruta","pera","banana"];

// array.sort()
// console.log(array);


//objeto Math

//nos va a proporcionar propiedades matematicas y metodos 
//para la realizacion de operaciones matematicas

//propiedades

//metodo PI

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.PI.toFixed(3));

// //metodos min y max

// //math.min => devuelve el valor mas pequeño entre los numeros
// //que se proporcionan un listado

// let minimo = Math.min(75,54,22);
// console.log("minimo:" + minimo);

//math.max => devuelve el valor mas grande entre los 
//los numeros de un listado 


// let maximo = Math.max(75,54,22);
// console.log("maximo: " + maximo);

// let variable = [2,3,4,5];

// let maximo1 = Math.max(...variable);
// console.log(maximo1);

//ceil, floor, round => nos van a servir para redonderar numeros o valores


//ceil => retornar un numero que indiquemos y lo va a redondear hacia arriba

// let decimal = Math.ceil(1.45);
// console.log(decimal);

// //floor => retornar un numero y lo va a redondear hacia abajo

// let floor = Math.floor(1.99);
// console.log(floor);

// //round => redondear un numero al entero mas cercano

// let round = Math.round(1.5);
// console.log(round);

// // metodos para raiz y potencias

// let raiz = Math.sqrt(18);
// console.log(raiz);

// let potencia = Math.pow(2, 4);
// console.log(potencia);

//metodo random => retornar un numero aleatorio que se va acomprender entre 0 y 1;

// let numeroAleatorio = Math.random();
// console.log(numeroAleatorio);

// console.log(Math.round(Math.random() * 50));

//Los numeros esten entre un intervalo de 10 y 50

// console.log(Math.round(Math.random() *5 + 1));

/*********CLASs DATE***********/

// date = >  es un objeto que me sirve para trabajar con fechas y horas

// let fechaActual = new Date();
// console.log(fechaActual);

// //date informacion => año - mes- dia- hora -min- seg

// let fechaEspecifica = new Date(2022,0, 15, 03 ,01,12);
// console.log(fechaEspecifica);

// let anio = fechaEspecifica.getFullYear();
// console.log(anio)

// let mes = fechaEspecifica.getMonth();
// console.log(mes) // de 0 a 11

// let dia = fechaEspecifica.getDate();
// console.log(dia)

// let hora = fechaEspecifica.getHours(); //getMinutes(), getSeconds() getMilliSeconds()
// console.log(hora) 

// //establecer componentes de fecha y hora

// fechaActual.setFullYear(2021);
// console.log(fechaActual);

// //pedido de datos toDate

// console.log(fechaActual.toDateString())
// console.log(fechaActual.toLocaleString())
// console.log(fechaActual.toLocaleDateString())
// console.log(fechaActual.toLocaleTimeString())

// //alquilar peliculas

class Cliente{
    constructor(nombre, edad, membresia){
        this.nombre = nombre;
        this.edad = edad;
        this.membresia = membresia;
    }
}

class Alquiler{
    constructor(pelicula, cliente, costo, fecha){
        this.pelicula = pelicula;
        this.cliente = cliente;
        this.costo = Math.round(costo);
        this.fecha = fecha || new Date (); 
    }
}

class Pelicula{
    constructor (nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
}

let clienteUno = new Cliente("emiliano", 20,"premium");
let clienteDos = new Cliente("sebastian",30, "free");

let peliculaUno = new Pelicula("50 sombras de grey","fantasia");
let peliculaDos = new Pelicula("mingo y anibal en la mansion embrujada","accion");

let alquilerUno = new Alquiler(peliculaUno, clienteUno,40.5);
let alquilerDos = new Alquiler(peliculaDos, clienteDos, new Date("june 6, 2023 10:00"));

function diasAlquilerMembresia(cliente) {
    if(cliente.membresia == "premium"){
        return 3;
    }else{
        return 2;
    }
}

function peliculaDevolverHoy(alquiler){
    let fechaAlquier= alquiler.fecha;
    let fechaActual = new Date();
    let diaAlquiler = diasAlquilerMembresia(alquiler.cliente);

    fechaAlquier.setDate(fechaAlquier.getDate() + diaAlquiler);

    if(fechaAlquier < fechaActual){
        return `la pelicula ${alquiler.pelicula.nombre} debe devolverse hoy, el costo de alquiler es ${alquiler.costo}`
    }
    else{
       return `la pelicula ${alquiler.pelicula.nombre} no debe devolverse hoy, el costo de alquiler es ${alquiler.costo}`
    }

}

console.log(peliculaDevolverHoy(alquilerUno));
console.log(peliculaDevolverHoy(alquilerDos));