//template literals o template string
// let nombre= "pedro"

// // const MENSAJE = "hola" + nombre + " !"; 

// const mensaje =` hola, ${nombre}`;

//operador ternario => es una manera resumida de escribi o de hacer un if else. 
//nos va a permitir realizar una evaluacion de condicion y devolver un valor en base a eso. 


//posee 3 partes:

// condicion booleana ? valor_si_es_verdadero : valor_si_es_falso;


// let mayorEdad = 18;

// if (mayorEdad >= 18){
//     console.log("es mayor");
// }else{
//     console.log("es menor");
// }
 
// //los operadores ternarios poseen return implicito. 
// let resultado = mayorEdad == 18 ? console.log("es mayor ternario") : console.log ("es menor ternario");



//operador logico and  && => podemos nostros simplificar la condicion if en una sola linea de codigo

// let nombreCliente = "maxi";

// (nombreCliente === "maxi") && alert ("hola maxi")

//condicional or  => revisa una de las 2 condiciones se cumpla.

//condicional or lo vamos a utilizar para almacenar dato en variables. 

//concepto de falsy => hace referencia a aquellos valores que se evaluan como falsos. 
// false es parte de la condicion booleana.
// existen tipos de datos que nacen por defectos falsos
// 1) false de booleanos => el primer valor que esta dentro de los falsy.
// 2) 0 => tambien se considera falsy. 
// 3) null => significa nulo
// 4) undefined = el valor indefinido tambien es falsy 
// 5) NaN => not a number tambien es falsy.
// 6) "" cadena vacia => tambien se cosidera falsy. 


// ejemplo de pedir dato al usuario

// let nombre = prompt("ingrese el usuario");

//  console.log(nombre || "invitado");



 ///operador nullish coalescing => operador fusion nula, se representa a traves de ??
 //nos ayuda a proporcionar una forma de evaluar y devolver un valor predeterminado, 

 //const resultado = valorIzquierdo ?? valorPredeterminado;

//  const x =  ;
//  const y = "valor predeterminado";

//  const resultado = x ?? y;

//  console.log(resultado);

//acceso condicional a un objeto

//caracteristica de js que utilizamos para acceder a propiedades de un objeto
//sin generar error si el objeto o la propiedad no exisiten. 


// const usuario = null;

// console.log( usuario.nombre || "El usuario no existe" )
// // Error: "No se pueden leer propiedades de NULL"

// console.log( usuario?.nombre || "El usuario no existe")


///destructuring o desestructuracion. 

//expresion de js las cuales nos permiten descomponer estructuras de datos, objetos o los arrays.
//esto lo vamos aconvertir en variables pequeñas y manejables.

//nos va a hacer mas facil la vida cuando trabajamos con datos estructurados y vamos a tener variables mas consisas

// //destructuracion de objetos

// const PERSONA = {

//     nombre: "nico",
//     edad: 30,
//     provincia: "cordoba"

// };


// const {nombre:nombrePepe, edad, provincia} = PERSONA;

// console.log(nombrePepe);
// console.log(edad);
// console.log(provincia)

// const Persona1 ={
//     nombre:"tomas",
//     edad: 30,
//     provincia: "cordoba"
// }

// const {nombre, edad:, provincia:provinciaPersona1} = Persona1;

// let nombre = PERSONA.nombre;
// let edad = PERSONA.edad;
// console.log(nombre);
// console.log(edad);

//destructuracion de parametros

const alumno ={
    nombre:"juan",
    edad: 30
}


// function mostrarDatos({nombre,edad}){
//     console.log(`hola mi nombre es ${nombre} y tengo ${edad}`)

// }

// mostrarDatos(alumno); 

// //destructuracion de array

// const frutas = ['manzanas','naranja','frutilla','mandarina'];

// const [ , fruta2, ,fruta3] = frutas;

// // console.log(fruta1);
// console.log(fruta2);
// console.log(fruta3);


//podemos asignar valores

const {nombre,edad, ciudad ='mar del plata' } = alumno;

console.log (ciudad);

console.log(alumno);