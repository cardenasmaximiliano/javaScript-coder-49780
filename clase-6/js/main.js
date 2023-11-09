//como es la estructura de un array, arreglos, matriz


//declaraciones literal
// let productos = ["royal", "dog Chow","pedigree", "sabrocitos","royal", "dog Chow","pedigree", "sabrocitos"];
// let numeros = [1,2,3,4,5,6];
// let boolean =[true, false,true];
// let variosDatos = ["sillon",2,true]; 

//nosotors accedemos de manera general
// console.log(productos);

//nosotros tambien podemos acceder dato por dato

// console.log(productos[1]);

// for(let i = 0; i < 8; i++){
//     console.log(productos[i]);
// }

// //construcor de objetos de array

// const pokemones = [
//     {
//         pokemon:"pikachu",
//         numeroPokemon: 1
//     },
//     {
//         pokemon:"charmander",
//         numeroPokemon: 2
//     }
// ]


//metodo length

//aplicado a un array

// let estudiantes =["juan", "soledad", "paulina", "nico","sebastian"];

// let cantidadEstudiantes = estudiantes.length;

// console.log("la cantidad de estudiantes que posee la clase son: " +cantidadEstudiantes);

// estudiantes.push("Jose Pablo","pedro");
// console.log(estudiantes);



//cadenas de textos
// const texto = "hola   chicos";
// const longitudTexto = texto.length;
// console.log(longitudTexto);

//push : agregamos uno o mas elementos al final de un array.

// let numeros= [1,2,3,4];

// numeros.push(5);
// console.log(numeros);

//pop: elimina el ultimo elemento que posee un array

// let perritos = ["caniche", "schnauzer", "pequines","dogo"];

// let sacoPerrito = perritos.pop();

// console.log(perritos);
// console.log("elemento eliminado " + sacoPerrito);

//shift: elimina el primer elemento dentro de un array

// let fila = ["primero", "segundo", "tercero"];

// let elementoEliminado = fila.shift();

// console.log ("elemento eliminado: " + elementoEliminado );
// console.log(fila);

//splice

// let colores = ["rojo", "verde", "azul", "amarillo"];
// colores.splice(1,2);
// console.log(colores);

//join_ convierte los elementos del array en una cadena de texto y los une utilizando un separador especifico

// let palabras = ["rojo", "verde", "azul", "amarillo"];

// let oracion = palabras.join("  ");

// console.log(oracion);

//metodo split nos convierte una cadena de caracteres en un array

//  const CADENA = "1-2-3-4-5-6-7-8-9-10";

//  let array = CADENA.split("-");
// console.log (array);

//concat: combinamos dos o mas arrays en uno nuevo 

let numero = [1,2];

let nombre = numero.concat(["pedro", "pablo"]);
console.log(nombre);

//slice: nos genera un subconjunto de elemento de un array que ya existe

let original= [1,2,3,4,5];

let copia= original.slice(3,5);

console.log(copia);

//indexOf 

let frutas = ["manzana" , "platano", "naranja","kiwi"];

let indice = frutas.indexOf("platano");
console.log("el indice de la fruta es: "+ indice);

//include

let estaLaFruta = frutas.includes("kiwi");
console.log(estaLaFruta);

//reverse: invierte el orden del array

frutas.reverse();
console.log(frutas);

8//arrays con objetos

const personas = [
    {
        nombre:"maxi",
        edad: 30
    },
    {
        nombre:"pedro",
        edad: 16
    }

]

//for .. of 

let frutasForOf = ["manzana","frutilla","pera"];

for(const frutaForOf of frutasForOf){
    console.log (frutaForOf);
}

// productos y precios 


const CARRITO =[
    {
        producto: "camiseta",
        precio: 10
    },
    {
        producto: "zapatilla",
        precio: 20
    },
    {
        producto: "chaleco",
        precio: 30
    },

]
//variable de precio

let precioTotal = 0;

//
for(const item of CARRITO){
    precioTotal += item.precio;
}

console.log ("el precio total del carrito es: $" + precioTotal)