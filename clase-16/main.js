//ajax => es una tecnologia que nos permite hacer peticiones
//asincronas a un servidor sin necesidad de recargar la pagina


// API(NTERFAZ DE PROGRAMACION DE APLICACIONES)=
//son conjunto de reglas y definiciones que permiten qu diferentes aplicaciones
//se comuniquen entre si. 
//puede proporcionar funciones y metodos que permiten a desarrolades 
//acceder a distintos datos o caracteristicas.

// api web => suelen ser protocolos http, para tranferis datos y estos se devuenven
// JSON o XML. 


//1 vamos a utilizar para conectarnos con jsonplaceholder
const url = "http://jsonplaceholder.typicode.com/users";

//creamos un objeto de tipo XMLhttpRequest
//es un objeto que proporciona funcionalidad para realizar 
//solicitudes HTTP asincronas desde el navegador.

const xhr = new XMLHttpRequest();

//3 creamos una funcion de tipo manejadora

function manejador(){
    if(this.readyState === 4 && this.status === 200){

        //es una funcion que utilizamos para convertir una cadena json en un objeto.
        const datos = JSON.parse(this.response);
       
    console.log(datos);
    mostrarUsuarios(datos);

    }
    
    //   
    //readyState => es un atributo que indica el estado de peticion. 
    // existen 5 estados de peticion, que van del 0 al 4
    // 0 => unsent, la solicitud no ha sido iniciada. 
    // 1 => opened => la conexion con el servidor ah sido establecida
    // 2 => header received => han recibido las cabeceras de la respuesta.
    //3 => loading => se esta recibiendo la resupuesta. Y se descargan los datos. 
    // 4 => done => la operacion fue completada. 
    //status => propiedad que indica el codigo de estado de HTTP, de la respuesta recibida por el servidor.
    //200 => va a decirnos que la solicitud se ha completado.
    //404 => not found => la pogina no se encuentra.
    //500 => error interno del server => hay un error del servidor al procesar la solicitud.    
    
    //metodo open
    
}

xhr.addEventListener("load", manejador);

xhr.open("GET", url);

//metodo send

xhr.send();
//4 evento load
//creamos una funcion de usuarios

const app = document.getElementById("app");

function mostrarUsuarios(datos){
    datos.forEach(usuario =>{
        const li = document.createElement("li");
        li.textContent = `${usuario.id} - ${usuario.name} - ${usuario.email}`
        app.appendChild(li);
    })
}

//fetch

//se utiliza para tambien realizar solicitudes HTTP (llamados a apis)desde el cliente hacia un servidor.
//fetch es mucho mas sensillo de manipular posee un interfaz mas moderna y es mas flexible.

/*
    fetch('la ruta de la api')
        .then(response =>{
            siempre y cuando el servidor respondiera de manera correcta.
        })
        .catch(error=>{
            algo salio mal al hacer la solicitud
        }
*/

const apiFotos = "http://jsonplaceholder.typicode.com/photos";

const contenedorFotos = document.getElementById("contenedorFotos");

fetch(apiFotos)
//primer then => recibe respuesta de la conexion
    .then(respuesta => respuesta.json())
    //toma los datos frente a la respuesta(hacer algo con los datos)
    .then((datos)=>{
        console.log(datos)
        mostrarFotos(datos);
    })
    .catch(error => console.log(error))
    .finally(()=> console.log("proceso finalizado"));

function mostrarFotos(datos){
    datos.forEach(fotos =>{
        const img = document.createElement("img");
        img.src= fotos.url;
        contenedorFotos.appendChild(img);
    })
}

//ejemplo de cotizador

const criptoYa = "https://criptoya.com/api/dolar";

const divDolar = document.getElementById("divDolar");

//setInterval => es un funcion de js que nos servia para ejecutar repetidament una funcion o bloque de codigo.

// setInterval(funcion, intervalo de tiempo en milisegundos)

setInterval(()=>{
    fetch(criptoYa)
    .then(response => response.json())
    .then(({blue,ccl,mep,oficial,solidario,qatar})=>{
        divDolar.innerHTML = `
        <h2>tipos de dolar: </h2>
        <p>Dolar oficial:${oficial}</p>
        <p>dolar Solidario:${solidario}</p>
        <p>dolar MEP: ${mep}</p>
        <p>Dolar CCL:${ccl}</p>
        <p>Dolar Blue:${blue}</p>
        <p>Dolar Qatar:${qatar}</p>
        `
    })
    .catch(error => console.log(error))


},1000);

