//programacion sincronica

//nos referimos a la ejecucion de las operaciones dentro de un programa en orden secuencial.
//es de tipo bloqueante => su hay algun error en el medio este programa frena y se deja de ejecutar
//es lineal

//

// console.log("inicio de operacion");

// function operacionSincrnica(){

//     for (let i= 0; i <3; i++){
//         console.log("paso " + (i+ 1));
//     }
// }

// operacionSincrnica();
// console.log("fin de operacion");

// //programacion asincrona

//las operaciones que ejecuta no son bloqueantes, al hilo principal de la ejecucion
//nos va a permitir que otras operaciones continuen mientras esperamos que algo sucesa.

//setTimeout

//funcion que utilizamos para programar la ejecucion de una funcion despues de un tiempo.

//setTimeout (funcion, tiempo en milisegundos);

// console.log("inicio de programa");

// setTimeout(function(){
//     console.log("operacion asincrona")
// },5000);

// console.log("fin de Programa");

//como cambiar palabras

function cambiarContenido(){
    document.getElementById("miElemento").innerHTML = "Soy desarrollador web";

}
function cambiarContenidoDos(){
    document.getElementById("miElemento").innerHTML = "De Mar del plata";

}


console.log("iniciar programa");

setTimeout(cambiarContenido,4000);
setTimeout(cambiarContenidoDos,3000);
console.log("fin de programa")


// for(let letra of "hola chicos"){
//     setTimeout(()=>{
//         console.log(letra);
//     },2000);
// }

const mensaje = "sabastian";
const elementoDos = document.getElementById("elementoDos");
let indice = 0;

//mostrar letras = funciion que se encargue de añadir la letra actual
function mostrarLetra(){
    elementoDos.textContent += mensaje[indice];
    indice ++;

    if(indice < mensaje.length){ 
        setTimeout(mostrarLetra,1000);
    }
}

setTimeout(mostrarLetra,100);

//callstack (pila de llamadas)

//es una estructura de datos que registra llamados a funciones en ejecucion.
//cuando una una funcion se llama, se agrega a la pila de llamadas y cuando funcion termina
//la pila se elimina.



//event loop => gestiona el flujo de ejecucion garantizando que el codigo asincriono.
//como la funcion setTimeOut o eventos que hagamos en el DOM se manejen de forma correcta.

//setInterval => se utiliza para ejecutar repetidamente una funcion o bloque de de codigo
//a intervalos especificos. 

//setInterval (function, intervaloEnMiliSegundos);

//temporizador


// let tiempoRestante = 10;

// function actualizarTemporizador(){
//     const temperizadorElemento = document.getElementById('temporizador');
//     //mostrar el tiempo restante en HTML

//     temperizadorElemento.textContent = "tiempo restante: "+tiempoRestante;

//     tiempoRestante--;

//     //cuando llegue a 0 el temporizador frena

//      if(tiempoRestante < 0){
//         clearInterval(intervaloID);
//         temperizadorElemento.textContent ="TIEMPO TERMINADO"
//    }
// }

// const intervaloID = setInterval(actualizarTemporizador,1000);

//clear interval => se utiliza para detener la ejecucion de un
// intervalo que fue previamente establecido

///

let segundos= 0;
let minutos = 0;
let intervaloId;


function actualizarCronometro(){
    segundos++;

    if(segundos === 60){
        segundos = 0;
        minutos++;
    }
    
    const cronometroElemento = document.getElementById("cronometro");
    cronometroElemento.textContent = `${minutos}:${segundos <10 ? '0' : ''} ${segundos}`;
    
}
    function iniciarCronometro(){
        intervaloId = setInterval(actualizarCronometro, 1000);
    }
    
    function detenerCronometro(){
        clearInterval(intervaloId);
    }
    
    function reiniciarCronometro(){
        segundos = 0;
        minutos = 0;
        const cronometroElemento = document.getElementById("cronometro");
        cronometroElemento.textContent = "0:00"
    }

    detenerCronometro();

    //promesas => objeto que representa un objeto a futuro
    // puede ser resulta o  ser rechazada

    //promesa tiene 3 estados => pending fulfilled, rejected 

    //pending => estado inicial de la promesa espera a si se ejecuta o se rechaza

    //fulfilled => la promesa se ejecuta

    //rejected => la promesa falla.

    // const falsaPromesa = ()=>{
    //     return new Promise((resolve, reject)=>{
    //         //resolve => la parte que se ejecuta si la promesa se cumple
    //         // reject => cuando la promesa n ose cumple
    //     })
    // }

    // console.log(falsaPromesa());

    class Usuario{
        constructor(user,password){
            this.user = user;
            this.password= password;
        }

    }

    const usuario1 = new Usuario("usuarioUno",1234);
    const usuario2 = new Usuario("usuarioDos",1234);
    const admin = new Usuario("admin", 4321);

    const usuarios= [usuario1, usuario2,admin];

    const solicitarUsuarios = (estado) =>{
        return new Promise((resultado, rechazado)=>{
            if(estado ==true){
                resultado(usuarios);
            } else{
                rechazado("gracias vuelva pronto");
            }
        })
    }

    console.log(solicitarUsuarios(false));

//.then y .catch

//son metodos para manejar resultados de las promesas. 

//then => se utiliza para manejar la resolucion exitosa de promesas. 
//proporcian una funcion de retorno de llamada que se ejecutara cuando la promesa sea exitasa.

//.catch => se utiliza para manejar la resolucion rechazada de promesas.
//proporcian una funcion de retorno de llamada que se ejecutara cuando la promesa sea rechazada.


// miPromesa.then(valor =>{
    // mensaje o funcion
//})

// miPromesa.catch(error =>{
//  mensaje o funcion    
//})

function operacionExitosa() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const exito = false;
            
            if(exito){
                resolve("operacion exitosa");

            }else{
                reject("fallo operacion")
            }
        },1000);
    });
}

operacionExitosa()
    .then(resultado =>{
        console.log(resultado);
        return "datos adicionales"
    })
    .then(datosAdicionales=>{
        console.log("datos adicionales",datosAdicionales);
    })
    .catch(error =>{
        console.error(error)
    });
