//spread operator ( ... )

//operador de propagacion utilizamos estos para desempaquetar elementos de un array o propiedades de un objetos.

//arrays

//copiar arrays 

let arrayOriginal = [1,2,3,4];

// let copiaArray = [ ...arrayOriginal];

// console.log(copiaArray);

// console.log(copiaArray === arrayOriginal);

//podemos concatenar arrays

// let arrayDos = [5,6,7];

// let arrayConcat = [...arrayOriginal, ...arrayDos];

// console.log(arrayConcat);

//podemos tambien añadir a nuestro array

// let nuevoArray = [...arrayOriginal,5,6,7];

// console.log(nuevoArray);


// console.log(arrayOriginal);

// const nombres1 = ["Juan", "Julieta"]
// const nombres2 = ["Carlos", "Mariela"]

// // spread de los dos arrays dentro de otro
// const nombres = [...nombres1, ...nombres2]

// console.log(nombres) // ["Juan", "Julieta", "Carlos", "Mariela"]

// // spread del array en un objeto
// const nombresObj = {
//     ...nombres
// }

// console.log(nombresObj)


///spread de objetos

//copia de objetos
// const objetoOriginal = {
//     a:1,
//     b:2
// }

// const objetoDos ={
//     c:3,
//     d:4
// }

// const copiaObjeto = {...objetoOriginal};

// //concatenar objetos
// const concatObjeto = {...objetoOriginal, ... objetoDos};

// const modificarObjeto = {...concatObjeto, pepe:"string"} 

// console.log(copiaObjeto)
// console.log(concatObjeto);

// console.log(modificarObjeto);


//se puede pasar un objeto a array
// let objeto = {a:1, b:2}

// let miArray = Object.keys(objeto).map(function(clave){
//     return objeto[clave];
// })

// console.log(miArray);

// let miArray = Object.values(objeto);

// console.log(miArray);

//ejemplos de spread

const OriginalPesona ={

    nombre:"juan",
    edad:20,
    direccion:{
        ciudad: "mar del plata"
    }
};

const copiaPersona ={
    ...OriginalPesona,
    direccion:{
        ...OriginalPesona.direccion,
        ciudad:"santa clara"
    }
};

console.log(copiaPersona);

//clonar y modificar arrays

const usuarios = [
    {id:1, nombre: "carlos"},
    {id:2, nombre: "pepe"},
    {id:3, nombre:"antonella"}
]

//clonar y actualizar usuario

const actualizarUsuario = usuarios.map(usuario => usuario.id === 2 ?{...usuarios, name:"roberto"}: usuario);

console.log(actualizarUsuario);

//rest parameters => nos permite representar un numero indefinido de argumentos con un array.
//utilizamos ( ... )el nombre del parametro. 

//util cuando no sabemos cuantos argumentos pasar a una funcion.

function sumar(...numeros){
    let resultado = 0;
    for(let numero of numeros){
        resultado += numero;
    }
    return resultado;
}

console.log(sumar(2,3,1))
console.log(sumar(7,8))


