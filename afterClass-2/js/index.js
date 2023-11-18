// const PERSONAS = [
//     {nombre: "paulina", edad:25},
//     {nombre:"cristian", edad:30},
//     {nombre: "tomas", edad: 27},
//     {nombre: "pedro", edad: 40}
// ];
//     //se genera el parametro IterarEdades para decirle a la funcion que dato captar
// function calcularPromedioEdades(iterarEdades) {
    
//     //inicia el contador en 0
//     let sumaEdades = 0;

//     //se genera el conteo 4 veces 
//     for(let i= 0; i< iterarEdades.length; i++){
        
//         //esta linea nos dice que se genera la iteracion sacando la informacion de ARRAYPersona a traves del .edad
//         sumaEdades +=  iterarEdades[i].edad;  
//     }

//     //aca se generea el promedio 
//     const PROMEDIO = sumaEdades / iterarEdades.length;

//     return PROMEDIO;
// }


// //esta linea de codigo lo que hace es decirle a calcularEdadesDeDonde lo tiene que sacar
// const PROMEDIO_EDADES = calcularPromedioEdades(PERSONAS);

// alert("el promedio de edades es: " + PROMEDIO_EDADES);


const NUMEROS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15];

function filtrarNumerosPares(arrayNumeros){

    const NUMEROS_PARES =[];
    
            //
            for(let i = 0; i < arrayNumeros.length; i++){
                //aca van las condiciones
                if(arrayNumeros[i] % 2 === 0){
                    NUMEROS_PARES.push(arrayNumeros[i]);
                }
            }
    return NUMEROS_PARES;
}

const NUMEROS_PARES = filtrarNumerosPares(NUMEROS); 
 
console.log("numeros pares:" + NUMEROS_PARES);


class PERSONA {
    constructor (nombre, edad){

        this.nombre = nombre;
        this.anioNacimiento = edad;
    }

    saludar(){
        console.log ("mi nombre es" + this.nombre + "y tengo" + this.anioNacimiento);
    }

    

}