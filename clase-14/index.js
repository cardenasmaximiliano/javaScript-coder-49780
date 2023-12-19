const BOTON = document.getElementById("boton");

BOTON.addEventListener("click", () => {
    Swal.fire("hola estoy aprendiendo a usar una libreria")
})

const BOTON_DOS = document.getElementById("botonDos");

BOTON_DOS.addEventListener("click", () => {

    Swal.fire({
        title: "comision 49780",
        text: "la mejor comision del mundo",
        imageUrl: "http://placekitten.com/200/300",
        icon: "error",
        confirmButtonText: "aceptar",
        background: "bisque",
        backdrop: "red"

    })


})

const BOTON_TRES = document.getElementById("botonTres");

let carrito = ["arroz", "fernet", "fideos", "vino"];

BOTON_TRES.addEventListener("click", () => {
    Swal.fire({
        title: "¿Seguro que queres sacar el fernet?",
        icon: "warning",
        confirmButtonText: "aceptar",
        showCancelButton: true,
        cancelButtonText: "cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = carrito.filter(producto => producto !== "fernet");
            console.log(carrito);
            Swal.fire({
                title: "EL producto se elimino correctamente",
                icon: "success",
                confirmButtonText: "aceptar"
            })
        }
    })
});

//vamos a crear un login

const BOTON_CUATRO = document.getElementById("botonCuatro");

const usuarioAutorizado = "admin";
const passwordAutorizado = "1234";

BOTON_CUATRO.addEventListener("click", ()=>{
    Swal.fire({
        title:"inicio de sesion",
        html:`
        <input type="text" id="usuario" class="swal2-input" placeholder="ingresa tu usuario">
        <input type="text" id="password" class="swal2-input" placeholder="ingresa tu contraseña">
        `,
        confirmButtonText:"enviar",
        showCancelButton: true,
        cancelButtonText: "cancelar"
    }).then((result)=>{
        if(result.isConfirmed){
            const usuario= document.getElementById("usuario").value;
            const password= document.getElementById("password").value;
            if(usuario === usuarioAutorizado && password === passwordAutorizado){
                window.location.href="ingres.html";
        }
    }
    })
})


//toastify

const BOTON_CINCO = document.getElementById("botonCinco");

BOTON_CINCO.addEventListener("click", ()=>{
    Toastify({
        text:"producto agregado al carrito",
        duration: 1000,
        position: "right",
        gravity: "up",
        style:{
            background: "blue",
            color:"red"
        },
        destination:"http://placekitten.com/"
    }).showToast();
})


//luxon => 

// const DATE_TIME = luxon.DateTime;

// const EL_MEJOR_DIA = DATE_TIME.local(2022,12,18,12,10);

// console.log(EL_MEJOR_DIA);
const DateTime = luxon.DateTime;

const dateTime = DateTime.local(2022, 12,18,12,10);

console.log(dateTime.toString());


const dtNow= DateTime.now();
console.log(dtNow.toString());

console.log(dtNow.year);
console.log(dtNow.month);
console.log(dtNow.day);
console.log(dtNow.second);
console.log(dtNow.weekday);


console.log(dtNow.zoneName);
