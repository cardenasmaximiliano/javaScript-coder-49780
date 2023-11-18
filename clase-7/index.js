//definicion de una funcion que suma 2 numero.

// function sumar(a,b) {
//     return a + b ;
// }

// //usar funcion

// let resultado = sumar(3,6);


// console.log(resultado);


//definir una clase animal
// class Animal{
//     constructor(nombre, tipo){
//         this.nombre = nombre;
//         this.tipo = tipo;
//     }
//     //metodo para obntener informacion del animal
//     obternerInformacion(){
//         return `nombre: ${this.nombre}, tipo: ${this.tipo}`;
//     }

// }

// //creacion de instancias 

// let perro = new Animal("max", "perro");
// let gato = new Animal("felix", "gato")

// console.log(perro.obternerInformacion());
// console.log(gato.obternerInformacion());


//retorno de funciones 


// function mayorQue(x){
//     return (num) => num > x;
// }

// const MAYOR_QUE_DIEZ= mayorQue(10);

// console.log(MAYOR_QUE_DIEZ(9));

//EJEMPLO SUMAR Y RESTAR

// function asignarOperacion(operacion){
//     if(operacion === 'sumar'){
//         return function(numero1, numero2){
//             return numero1 + numero2
//         }
//     } else if( operacion == 'restar'){
//         return (numero1, numero2) => numero1 - numero2
//     }
// }

// let sumar = asignarOperacion ('sumar');

// console.log(sumar(4,6));

// let restar = asignarOperacion ('restar');

// console.log(restar(6,3));

// let restar2 = asignarOperacion ('restar');

// console.log(resta));


// function porCadaUno (arr,fn){
//     for(const elemento of arr){
//         fn(elemento)
//     }

// }
// const NUMEROS = [0,1,2,3,4,5,6];

// porCadaUno(NUMEROS, console.log);


///forEach = nos permite es iterar de manera rapida un array
// const NUMEROS = [1,2,3,4,5];

// NUMEROS.forEach(function(numero){
//     const RESULTADO = numero *2;
//     console.log(RESULTADO);
// })

//array de estudiantes

// const ESTUDIANTES =[
//     {
//         nombre: "ana",
//          edad: 20
//     },
//     {
//         nombre: "pepe",
//          edad: 30
//     },
//     {
//         nombre: "gina",
//          edad: 10
//     },
// ]

// function saludarEstudiante(estudiante){
//     console.log(`hola ${estudiante.nombre}, edad ${estudiante.edad}`)
// }

// ESTUDIANTES.forEach(saludarEstudiante);

//productos

// // const PRODUCTOS = [
// //     {
// //         articulo: "laptop", precio: 1000
// //     },
// //     {
// //         articulo: "mother", precio: 500
// //     },
// //     {
// //         articulo: "mouse", precio: 20
// //     }
// // ]

// //funcion aplicar descuento

// function aplicarDescuento(producto){
//     const DESCUENTO = 0.5;
//     const PRECIO_CON_DESCUENTO = producto.precio * (1-DESCUENTO);
//     console.log(`producto ${producto.articulo}, precio con desccuento: ${PRECIO_CON_DESCUENTO}`);
// }

// PRODUCTOS.forEach(aplicarDescuento);


//FIND = NOS DICE QUE VA A ENCONTRAR EL PRIMER ELEMENTO DE ARRAY QUE CUMPLA CON UNA CONDICION


// const ESTUDIANTES =[
//     {
//         nombre: "ana",
//          edad: 20
//     },
//     {
//         nombre: "pepe",
//          edad: 20
//     },
//     {
//         nombre: "gina",
//          edad: 10
//     },
// ]

// const USUARIO_MAYOR_EDAD = ESTUDIANTES.find(function(estudiante){
//     return estudiante.edad > 19;

// })

// console.log(USUARIO_MAYOR_EDAD);

//FILTER SE UTILIZA para crear arrays nuevos con todos los elementos que cumplan una condicion


// const PRODUCTOS = [
//     {

//         articulo: "laptop", 
//         precio: 1000
//     },
//     {
//         articulo: "mother", precio: 500

//     },

//     {

//         articulo: "mouse", precio: 20
//     },
//     {

//         articulo: "reclado", precio: 40
//     }
// ]

//solitarle al usuario un precio minimo

// const PRECIO_MINIMO_USUARIO= parseFloat(prompt("ingrese el precio minimo"));

// if(isNaN(PRECIO_MINIMO_USUARIO)){
//     console.log("por favor ingresa un numero");
// } else{
//      const PRODUCTO_FILTRADOS= PRODUCTOS.filter(function(producto){
//         return producto.precio >= PRECIO_MINIMO_USUARIO;
//      });
//      console.log('productos que cumplan con la condicion', PRODUCTO_FILTRADOS);
//     }


    
//SOME VERIFICA SI AL MENOS UN ELEMENTO CUMPLE DEL ARRYA CON ALGUNA CONDICION

// const NUMEROS= [1,2,10,5,3,4];

// let hayNumeroMayorA10 = NUMEROS.some(function(numero){
//     return numero >= 10;
// });

// console.log(hayNumeroMayorA10);

//MAPS

//array de productos

const PRODUCTOS = [
    {

        articulo: "laptop", 
        precio: 1000
    },
    {
        articulo: "mother", precio: 500

    },

    {

        articulo: "mouse", precio: 20
    },
    {

        articulo: "teclado", precio: 40
    }
]

// let nombreEnMayus= PRODUCTOS.map(function(producto){
//     return producto.articulo.toUpperCase();
// })

// console.log(nombreEnMayus);

let porcentajeAumento = 0.5;

let precioAumentado = PRODUCTOS.map(function(producto){
    return {
        articulo:producto.articulo,
        precio: producto.precio * (1 + porcentajeAumento)
    }
})

console.log(precioAumentado);