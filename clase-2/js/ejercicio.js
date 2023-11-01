const NOMBRE_USUARIO= prompt("ingrese nombre de usuario: ");
const PASSWORD= prompt("ingresar tu contraseña: ");

if(NOMBRE_USUARIO === "admin" &&(PASSWORD === "secreta" || PASSWORD === "123456")){
    console.log("estas adentro");
}else{
    console.log("Los datos no son verdaderos");
}


/*
precedencia de operadores

1- paretencis y corchetes
2- operadores unitarios, ++,  --
3- oritmeticos * / %
4- aritmeticos + - 
5- relaciones < <=, > >=
6 - igualdad == !=
7- operadores logicos && y ||

*/ 

