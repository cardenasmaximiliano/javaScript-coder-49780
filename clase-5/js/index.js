// const NOMBRE = "coder";
// let edad = 8;
// let estudiante = true;

// let persona ={

//     nombre: "samuel",
//     edad: 20,
//     dni: 37110154,
//     nacional: "argentino"

// }

// console.log(persona); //llamariamos los datos de manera general
// console.log(persona.nombre);//para acceder a los datos individualmente se pone Nobjeto . propiedad
// console.log(persona["dni"]);

// const CARGO ={

//     nombre: "",
//     apellido: "",
//     profesion: "",
//     ingreso: ""

// }

//objeto constrctor

// function Empleado(nombre,apellido, profesion, ingreso,id){
//     this.nombre = nombre,
//     this.apellido = apellido,
//     this.profesion = profesion,
//     this.ingreso = ingreso
//     this.id = id
// }

// const EMPLEADO1 = new Empleado("nico", "Krein Werle", "fullStack",2020, 1); 
// const EMPLEADO2 = new Empleado("maxi","cardenas","FronEnd",2020, 2);


// console.log(EMPLEADO1);
// console.log(EMPLEADO2);

//metodos 

// let persona ={
//     nombre: "juan",
//     edad: 30,
//     mostrarInformacion: function(){
//         console.log("nombre: " + this.nombre + ", edad: " + this.edad);
//     }

// };

// //llamar metodo informacion.

// persona.mostrarInformacion();

//cotizador de iva

// const IVA = 1.12;

// function Producto (nombre, precio, stock){
//     this.nombre = nombre,
//     this.precio = precio,
//     this.stock = stock,
//     this.precioIVA = function(){
//         let precioFinal = this.precio * IVA;
//         return "$" + precioFinal
//     }

// }

// let producto1 = new Producto("pepas", 100, 50);

// console.log(producto1);

// console.log(producto1.precioIVA());

// class Persona{
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar(){
//         console.log ("hola gente mi nombre es " + this.nombre + " y tengo "+ this.edad)
//     }

// }

// //

// const PERSONA1 = new Persona("juan", 30);

// console.log(PERSONA1);

// PERSONA1.saludar();

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("arroz", 125);
const producto2 = new Producto("fideo", 50);
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();


