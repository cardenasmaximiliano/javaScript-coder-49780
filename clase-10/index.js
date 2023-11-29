//eventos

//los eventos son la manera que tenemos en Js de controlar, las acciones de usuarios y definir un comportamiento
//cuando se produzca.

// ¿como funcionan los eventos?

//para que funcione un evento usamos una herramienta llamada manejador de eventos. 

//existen 3 formas de realizar la escucha de un evento


//1 manera de escuchar un evento. 

//vincular el boton con el id, 

const BTN = document.getElementById("btn");

//vamos a utilizar un metodo de js addEventListener=> se utiliza para registrar un controlador 
//de eventos en un objeto especifico.
//el elemento que va a controlar es un elemento del DOM. 

//sintaxis basica de addEventListener

// elemento.addEventListener(evento, function) => (va a ser referencia a la accion que
 //se ejecuta sobre el elemento / va a ejecutar que queremos que se produzca en el evento)

BTN.addEventListener('click', function(){
    alert('se hizo click en el boton');
})

//segundo metodo, utilizamos las propiedades del NODO. 

const btnDos = document.getElementById("btnDos");

btnDos.onclick = () =>{
    alert("estamos usando la segunda forma");
}

//tercer metodo, escribiendo funciones en el HTML

function jsEnHTML(){
   alert("estamos llamando una funcion desde HTML")
}


// eventos de mouse => se van a producir cuando el usuario haga alguna interaccion con el mouse

const CAJA = document.getElementById("caja");

//eventos de mouse => mouseover => EL PUNTERO DEL MOUSE DE MUEVE
//SOBRE EL ELEMENTO

// CAJA.onmouseover = ()=>{
//     console.log("esta pasando el mouse sobre la caja");
// }

//mouseout => detecta cuando el mouse sale del elemento

// CAJA.onmouseout = () =>{
//     console.log("mouse sale de la caja");
// }


//mousemove => determinar el movimiento del mouse sobre un elemento
CAJA.onmousemove= () =>{
    console.log ("paso el mouse por la caja")
}

// mousedown / mouseup => cuando se oprime o se suelta el elemento
//con click del raton


CAJA.onmousedown = () =>{
    console.log("mousedown");
}

CAJA.onmouseup =() => {
    console.log("mouseup")
}

//eventos de teclado

const CAMPO_TEXTO = document.getElementById ("campoTexto");

//keyDown=>nos va informar cunado se preciona una tecla
//keyup => nos dice cuando se suelta una tecla

// CAMPO_TEXTO.onkeydown = () =>{
//     console.log("tecla presionada")
// }
// CAMPO_TEXTO.onkeyup = () =>{
//     console.log("quitamos la tecla presionada")
// }

//change => 

// CAMPO_TEXTO.addEventListener('change',function(){
//     console.log("valor cambiado: " + CAMPO_TEXTO.value);
// })

//input => permitir ejecutar una funcion cada vez que el usuario
//ingrese texto en el campo

// CAMPO_TEXTO.addEventListener('input',()=>{
//     console.log(CAMPO_TEXTO.value);

// })

//evento submit => se activa cuando un formulario es enviado.

class Cliente{
    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const arrayClientes = [];

const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");


    //verificar por consola que capte los datos
    console.log("el nombre ingresado es:" + nombre.value);
    console.log("el apellido ingresado es: " + apellido.value);
    
    //creamos el objeto cliente
    
    const cliente = new Cliente (nombre.value, apellido.value);
    arrayClientes.push(cliente);
    
    //vericamos por consola  el array
    
    console.log (arrayClientes);

    formulario.reset();
})

