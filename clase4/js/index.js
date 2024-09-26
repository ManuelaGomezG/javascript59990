//sentancia switch

//  switch (expresion){
//          case valor 1
//          codigo de ejecucion
//          break;
//          case valor 2
//          codigo de ejecucion
//          break;
//          case valor 3
//          codigo de ejecucion
//          break;
//          case valor 4
//          codigo de ejecucion
//          break;
//           default
//          codigo de ejecucion en caso de que no se cumpla ninguna condicion}


/**
 * const NUM1 = parseFloat(prompt("Ingrese un numero"));
const OPERACION = prompt("Ingrese la operacion que desea hacer ( + - / * )");
const NUM2 = parseFloat(prompt("Ingrese otro numero"));
 * 
 */




// if (OPERACION === +){
//     NUM1 + NUM2
//}


/*
let resultado;

switch (OPERACION) {
  case "+":
    resultado = NUM1 + NUM2;
    break;
  case "-":
    resultado = NUM1 - NUM2;
    break;
  case "*":
    resultado = NUM1 * NUM2;
    break;
  case "/":
    resultado = NUM1 / NUM2;
    break;
  default:
    alert("no estas ingresando una operacion valida")
    resultado = "no es valido"
}

alert ("El resultado es : " + resultado)

 */



/**
 * FUNCIONES
 * bloque de codigo reutilizable
 * que va a ejecutar una funcion en especifico
 * las funciones se utiizan para agrupar conjuntos de instrucciones
 * 
 * sirven para dividir tareas en bloques de codigo mas pequeños
 * 
 * * reutilizable
 * * modularizar y organizarlo
 * * faciitar mantenimiento y actualizaciones
 * 
 * 
 * Estructura
 * 
 * function saludar(parametros){
 *   //escribir el codigo a ejecutar
 * }
 * 
 * =>
 * 
 * saludar();
 * 
 * 
 */

//LAS FUNCIONES SUELEN SER VERBOS Y SE ESCRIBEN EN CAMEL CASE

/*
function saludar(){
    console.log("Buenas noches.. sufro con esto :( ")
}


saludar();
saludar();
saludar();
saludar();

*/



/*

function sumar (){
    let num1 =parseInt(prompt("ingresa un numer"))
    let num2 =parseInt(prompt("ingresa otro numero"))

    let suma = num1 + num2;

    console.log("la suma es : " + suma)
}

sumar();

*/

/*
let nombreIngresado = prompt("ingresarnombre");
console.log("el nombre ingresado es : " + nombreIngresado)
let nombreIngresado2 = prompt("ingresarnombre");
console.log("el nombre ingresado es : " + nombreIngresado2)

*/



/*

function ingresarNombre (nombre){
    console.log("ingresar nombre " , nombre);
}

ingresarNombre("pedro"); // el nombre aca no es parametro.. es argumento

ingresarNombre("maxi");

*/



/* 
function datosPersona (nombre, apellido, edad){

    console.log("esta persona se llama " + nombre + "su apellido es " + "tiene " + edad + " años")
}

//cuando llamamos a una funcion.. los datos que se usan se llaman argumentos. estos argumentos ingresana  la funion como parametros
datosPersona ("juan", "carlo", 25) //argumento


datosPersona ("mathias", "caligari", 27) //

function calcular

*/


//funcion que calcule intereses

function calcular(montoInicial){
    let tasaInteres = 0.05;

    function calcularIntereses(){
        return montoInicial + tasaInteres;

    }

    let intereses = calcularIntereses();
    let total = montoInicial + intereses

    return total
}

 console.log(calcular(100))










