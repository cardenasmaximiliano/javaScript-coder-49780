//funciones de orden superior => array 



//for each => resumir los pasos de un ciclo

//array.forEach(function(elemento, indice){})

// const NUMEROS =[1,2,3,4,5,6,7,8,9,10];

// NUMEROS.forEach(function(){
//     const RESUELTO = pepito *2;
//     console.log(RESUELTO);

// })

// find => dentro un array el 1º valor que cumpla
//con la condiciones que le demos


//

// let mayorPrecio = cadenas.find(function(cadena){
    //     return cadena.precio > 16000;
    
    // });
    
    // console.log(mayorPrecio);
    
    //filter => metodo que crea un array en base 
    //a uno existente que cumpla con x condiciones 
    // let cadenas =[
    
    //     {producto :"pikachu", precio: 25000},
    //     {producto:"mewtoo", precio: 15000},
    //     {producto:"mew", precio:1200},
    //     {producto:"charizard", precio: 1200}    
    // ];
    
//     let precioMinimo = parseFloat(prompt("cuanto podes gastar"));

// if(isNaN(precioMinimo)){
//     console.log("por favor ingresa numeros")
// } else{

//     let precioFiltrados = cadenas.filter(function(cadena){
//         return cadenas.precio <= precioMinimo;
//     });

//     console.log("los productos que podes comprar son:", precioFiltrados)
// }


//maps => metodo el cual nos sirve a nosotros para declarar nuevos array sin 
//modificar el original

// variable  = orrayOrigina.map(function (elementos, indice, array original))

// let numeros= [1,2,4,5];

// let numeroNuevos = numeros.map(indicesDeNumeros => indicesDeNumeros *2);

// console.log(numeros);
// console.log(numeroNuevos);

  
let cadenas =[
        {producto :"pikachu", precio: 25000},
       {producto:"mewtoo", precio: 15000},
       {producto:"mew", precio:1200},
        {producto:"charizard", precio: 1200}    
    ];

    let productosEnMayus = cadenas.map(objetoCadenas => {
        let aumento = objetoCadenas.precio * (40 /100);
        return{ producto: objetoCadenas.producto.toUpperCase(), precio:objetoCadenas.precio + aumento}
    } )

    console.log(productosEnMayus);