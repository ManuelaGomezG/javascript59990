//if => sentencia q nos dice si una condicion se cumple

/*
if(condicion){
    //la instruccion o lo q queremos q se cumpla
}
    */

//asignamos
//let a, b, c, d;

//inicializamos
//a=18;

/*
Operadores de comparacion o relacionales

= asignacion

== operador de igualdad (solo comra valores y no tipo de datos)

=== operador de igualdad pero estricto (compra valores y tipo de dato)

!= distinto

!== distinto estricto



*/


//a = 18;

//if(a == "18"){
  //  console.log("es un 18")
//}

//if(a === 18){
  //  console.log("me devolves 18?")
//}else {
    //console.log("no va a funcionar porq no es igual el tipo de dato")
//}

//cuantos años tengo

//cuando es un umero entero se usa ParseInt pero si es con decimales sera ParseFloat

//let edad = parent(prompt("porfavor ingresa tu edad para entrar al boliche"))

/*
mayor o menor q
mayor > (el numero es mayor al que se esta comparando)
>= (el numero es mayor o igual al que se esta comprando)

menor < (el numero es menor al que se esta comparando)
<= (el numero es menor al que se esta comparando o igual)
*/ 

//if (edad >= 18){
  //  console.log("la persona puede entrar")
//}else{
 //   console.log("la persona no puede entrar")
//}


// else if => cuando nosotros queremos comparar o hacer multiples condiciones

//Notas de evaluacines

//90 => el examne en optimo

//75 => el examen es correcto

//60 => el examen es bajo

//-60 => el examen esta desaprobado


/* 
let nota = parseInt(prompt("Ingresar nota del alumno"))

if(nota >= 90){
    console.log("la nota fue Optima con " + nota)
}
else if(nota >= 75){
    console.log("el alumno saco un Correcto " + nota)
}
 */

/* 
operador logico &&
este operador va a devolver true, siempre y cuando las condiciones se cumpan

a      b      a && b
true   true   true(se va a ejecutar)
true   false  false(no se va a ejecutar)
falsa  true   false(no se va a ejecutar)
false  false  false(no se va a ejecutar)


*/

//let edad = 25;

//let tieneLicencia = true;

// para q una persona pueda manejar debe de ser mayor de edad y tener licencia

//if(edad >= 18 && tieneLicencia === true){
   // console.log("el chico puede manejar")
//}
//else{
   // console.log("el chico no puede manejar")
//}


//operador OR se expresa con || se va a ejecutar el codigo si una de las condiciones es verdadera

/* 
a      b      a && b
true   true   true(se va a ejecutar)
true   false  true(se va a ejecutar)
falsa  true   true(se va a ejecutar)
false  false  false(no se va a ejecutar)
 */


/* 
let nombre = "Juan";
let apellido = "Perez";
let edad = 25;

if(nombre === "Juan" && apellido === "Perez" || edad >= 18){
    console.log("La persona cuebta con loscriterios para poder hacer la encuesta")
}else{
    console.log("la persona no cumple con los criterios")
}
 */


/* !
Operador NOT

true => !true => false
false => !false => verdadero

*/

let campoNombre = "";

if(!campoNombre){
    console.log("el campo nombre esta vacion, por favor completa el campo")
}
else{
    console.log("el campo completado")
}







