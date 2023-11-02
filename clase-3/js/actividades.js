let continuar;

do{
    const num1 = parseFloat(prompt("ingresa el primer numero:"));
    const num2 = parseFloat(prompt("ingresa el segundo numero: "));
    const operacion = prompt("ingrese la operacion, + - * o /");

    let resultado;

    switch(operacion){
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
             resultado = num1 - num2;
            break;
         case '*':
            resultado = num1 * num2;
               break;
         case '/':
            resultado = num1 / num2;
            break;
        default:
            alert("no entiendo la operacion");
            resultado= "indefinido";
    }

    alert("resultado: "+ resultado);

    continuar= prompt("quiere hacer otro calculo? si/no").toLowerCase();
} while (continuar ==="si"); 