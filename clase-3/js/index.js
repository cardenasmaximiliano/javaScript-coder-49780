/*
    operadores incremento / operadores de decremento

    operadores unitarios que nos van a ayudar a aumentar o disminuir un valor de una variable.

    operadores de incremento ++

    post-incremento, se expresa de la siguiente manera variable++ 



 */

    //post-incremento variable++

    // let x =5;
    // let y = x++;
    // console.log(y);
    // variable++ ==> variable+ = 1 ===> variable= variable + 1; 


    //pre-incremeto  ++variable 

    //el valor de la variable se va incrementar antes de que se utilice

    for(let i = 0; i < 21; i++){

        console.log("iteracion Nro", i);

    } 

    //tabla de multiplicar

    // let NUMERO = 6;

    // for(let i =1; i <= 10; i++){
    //     let RESULTADO = NUMERO * i;
    //     console.log (NUMERO + " X " + i + " = " + RESULTADO);
    // }

    // sentencia break

    // const NUMEROS_BREAK = [1,3, 5, 7, 9, 11];

    // const NUMERO_BUSCADO = 5;
    
    // for(let i = 0; i < NUMEROS_BREAK.length; i++){
    //     if (NUMEROS_BREAK[i] === NUMERO_BUSCADO){
    //         console.log("numeros encontrado" + NUMERO_BUSCADO);
    //         break; //salir del bucle cuando se encuentre el numero 
    //     }
    //     console.log ("numero actual" + NUMEROS_BREAK[i] );
    // }


    /// CICLO WHILE

    /*
    
    while (condicion){


    }
    */

    // let contador = 1; //vamos a iniciar en 1

    // while(contador <= 5 ){ // mientras la variable contador sea menor a 5 se va a ejecturar
    //     console.log ("numero: " + contador); //muestre el numero que se va generando
    //     contador++; //incrementar la variable  
    // }

    //juego de adivinanza

    // const PALABRA_SECRETA = "javascript";
    // let intentos = 0;
    // let adivinanza= " ";

    // while(adivinanza !== PALABRA_SECRETA){
    //     adivinanza = prompt("adivina la palabra secreta(es un lenguaje de programacion)").toLowerCase();
    //     intentos++;

    //     if(adivinanza !== PALABRA_SECRETA){
    //         alert("intenta de nuevo");
    //     }
    // }

    // alert("¡felicidades adivinaste la palabra secreta!" + intentos + " intentos" );

// do .. while

// do{
//     //se ejecuta el bloque de codigo aunque sea una vez
// } while(/*condicion*/);

// sumas ingresadas por usuario 

let suma = 0;

let continuar;

do{
    const NUMERO_SUMA = parseFloat(prompt(" ingrese un numero para sumar: "));
    if(!isNaN(NUMERO_SUMA)){
        suma += NUMERO_SUMA;
        continuar = prompt("¿quiere seguir? SI / NO").toLowerCase();

    } else{
        alert("ingrese numero valido");
        continuar = "si";
    }
} while (continuar ==="si");
console.log ("la suma es " + suma);

// switch

/*
switch (expresion){

    case valor1:
        codigo de ejecucion
        break;
    case valor2:
        codigo de ejecucion
        break;
    case valor3:
        codigo de ejecucion
        break;
    case valor4:
        codigo de ejecucion
        break;
    case valor5:
        codigo de ejecucion.

    default:
        codigo a ejecutar en caso de que no se cumpla ningun case previo
}


*/

const NUMERO_DIA= 2;

switch (NUMERO_DIA){
    case 1:
        console.log ("lunes");
        break;
    case 2:
        console.log ("martes");
        break;
    case 3:
            console.log ("miercoles");
            break;
    case 4:
        console.log ("jueves");
        break;

        default:
            console.log("dia no encontrado")
}
function name() {
    console.log('saludar');
    console.log('saludar');
    console.log('saludar');
    console.log('saludar');
    
}