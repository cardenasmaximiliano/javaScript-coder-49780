//declaracion de funcion

// function saludar(){
//     console.log("buenas chicos vamos a aprender funciones");
//     console.log("buenas chicos vamos a aprender funciones");
//     console.log("buenas chicos vamos a aprender funciones");
//     console.log("buenas chicos vamos a aprender funciones");
// };

// saludar();

// function sumar() {
//     let num1= parseFloat(prompt("ingresa el primer numero"));
//     let num2= parseFloat(prompt("ingresa el segundo numero"));
//     let suma= num1 + num2;
//     console.log("la suma es" + suma);
// }

// sumar();
// sumar();

// function pedirNombre() {
    
//     let ingresaNombre = prompt("ingresa nombre:");
//     console.log("ingresaste el nombre " + ingresaNombre);
    
// }

// let numero = 0;

// while(numero < 2){
//     pedirNombre();
//     numero ++
// };

//parametros


// let nombreIngresado = prompt("ingresar nombre:");
// let apellidoIngresado = prompt("ingresa tu apellido");
// function saludar(nombre, apellido) {
//     console.log("bienvenido " + nombre + " " + apellido);
// }

// saludar(nombreIngresado, apellidoIngresado);


//calculadora de descuento
// let numeroTotal = parseFloat(prompt("ingresa total"));
// let numDescuento = parseFloat(prompt("ingresa descuento"));


// function calculadoraConDescuento(total, descuento){
//     let desc= (total*descuento)/100;//cuento es el descuento en numero
//     let totalConDes= total - desc;// que va a restar el total con el numero que me da la variable de arriba
    
//     return totalConDes;
// }

// let totalConDescuento = calculadoraConDescuento(numeroTotal,numDescuento);
// console.log("el total con el descuento es: "+ totalConDescuento);

/// scoupe


// let variableGlobal= "variable global";

// function ejemploDeScoupe(){
//     let variableLocal = "variable local";
//     console.log(variableGlobal); //esto va a acceder a la global
//     console.log(variableLocal);// esto va a acceder a la local
// }

// ejemploDeScoupe();

// console.log(variableGlobal);//esto va acceder a la global
// console.log(variableLocal); //va a tirar un error

//arrow function

const CALCULAR_AREA_RECTANGULO = (base, altura) => base * altura;

const AREA = CALCULAR_AREA_RECTANGULO (4,3);

console.log ("el area del rectangulo es: " + AREA);