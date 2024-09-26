/*
Realiza un programa que permita ingresar un numero entero e indique si es par o impar




let numeroEntero = parseInt(prompt("Ingresa un numero entero y te diremos si es par o impar"));

if(numeroEntero / 2){
console.log("Tu numero es par!!")
} else{
    console.log("Tu numero es impar")
}


*/







/*
Realiza un programa que permita ingresar dos numeros enteros e indique cual es el mayor





let numeroUno = parseInt(prompt("Ingresa tu primer numero entero"));

let numeroDos = parseInt(prompt("Ingresa tu segundo numero entero"));

if (numeroUno > numeroDos === true){
    console.log("El primer numero ingresado es mayor que el segundo")
}else{
    console.log("El segundo numero que ingresaste es mayor que el primero")
}


*/






/*
Realiza un programa para ingresar tres numeros enteros e indique cual de ellos es el mayor y su valor



*/

let numeroUno = parseInt(prompt("Ingresa tu primer numero entero"));

let numeroDos = parseInt(prompt("Ingresa tu segundo numero entero"));

let numeroTres = parseInt(prompt("Ingresa tu tercer numero entero"));

let resultado = "";

if (resultado === (numeroUno > numeroDos === true) || (numeroUno > numeroTres === true)){
    console.log("El primer numero ingresado, " + "'" +numeroUno + "'" + " es el de mayor valor")
}else if (resultado === (numeroDos > numeroUno === true) || (numeroDos > numeroTres === true)){
    console.log("El segundo numero ingresado, "  + "'" + numeroDos + "'" + " es el de mayor valor")
}else if (resultado === (numeroTres > numeroUno === true) || (numeroTres > numeroDos === true)){
    console.log("El tercer numero ingresado, "  + "'" + numeroTres + "'" + " es el de mayor valor")
}



