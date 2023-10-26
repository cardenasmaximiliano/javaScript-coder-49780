/*
operadores relacionales o de comparacion

== operador de igualdad  x == y (es que solo se va a fijar si son iguales los valores) 
=== operador de igualdad  estricto (se fija en que sean iguales y en el tipo de dato)

!= distinto   
!== distinto estricto

> mayor que 
>= mayor o igual que 

< menor que 
<= menor o igual que 

 */

let a, b, c, d, e; //nos reservamos los nombres de las variables

//ejemplo de operador de igualdad
a = "8";

if (a == 8){
    console.log( "a es igual a 8");
}

//ejemplo de operador de igualdad estricto

b = "9";//tipo de dato como en el numero

if (b === "9"){
    console.log ("b es igual a el 9 string");
}

// ! distinto a 

c = 9;

if (c != 8){
    console.log( c +" "+ "es distinto a 8");
}

// > mayor que / mayor e igual que 

d = 9 ;

if (d >= 9){
    console.log (d + " " + "es mayor que 9");
}

// menor que 

e = 10;

if(e <= 10){
    console.log (e + " " + "es menor que 10");
}

// if ... else 

let numero1 = 10;

let numero2 = "10";

if(numero1 !== numero2){
    console.log ("los 2 numeros son estrictamente diferentes");
} else {
    console.log ("los numeros son iguales");
}

//if ... else

let nombreM = "matias";

if (nombreM == "maximiliano"){
    console.log("es el nombre correcto");
} else{
    console.log("no es el nombre que pedi")
}

// else if 

let miNumero = 0;

if (miNumero > 0){
    console.log ( "el valor es positivo");
} else if (miNumero < 0){
    console.log ("el valor es negativo");

}
else{
    console.log("el valor es 0")
}

//EDAD para conducir

//pedir el dato al usuario
// const EDAD = prompt ("Por favor, ingrese su edad:");

//convertir la entrada a un numero

// const EDAD_NUMERO = parseInt(EDAD);

//verificar la edad 

// if (isNaN(EDAD_NUMERO)){
//     console.log ("la entrada no es numero capo, volvelo a hacer");
// } else{
//     //comprobancion
//     if (EDAD_NUMERO >=18){
//         console.log ("genial tenes 18");
//     }else{
//         console.log ("sos menor de edad");
//     }
// }

//Operador logicos
/*
&& operador and (operador Y)
*/

let edadJoven = 16;

let tieneLicencia = true;

if (edadJoven >= 18 && tieneLicencia){
    console.log("podes manejar");
} else{
    console.log("no podes conducir");
}

// operador " o " =>  ||

let estudiante = false;

let empleado = false;

if (estudiante || empleado){
    console.log ("es estudiante o empleado");
}else{
    console.log ("no es estudiante ni empleado");
}


//operador logico "no" !

let verano = true;

if (!verano){
    console.log("no es verano");

}else{
    console.log ("es verano");
}

//ejemplos 3 
/*
let iniciarSesion = true;

if(!iniciarSesion){
    console.log ("por favor, inicia la sesion- kpo");
}else{
    console.log ("entraste al sitio");
}
*/

//

const INICIAR_SESION = prompt("¿iniciaste sesion?,(responde SI o NO)");

if (INICIAR_SESION === "NO"){
    alert("por favor, inicia sesion");
}
else{
    alert("ingresaste")
}




















