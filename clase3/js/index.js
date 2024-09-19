/*
CICLO OR CONTEO

-sabemos cuantas veces necesitamos q itere el codigo
-for

CICLO POR CONDICION
-no sabemos cuantas veces se va a repetir, pero si se cumple una condicion, frena
-while, do while
*/

/*
CICLO POR CONTEO

operadores importantes => incremento / decremento

cuando quremos incrementar algo => ++ => x + 1
cuando queremos decrementar algo => -- => i - 1

*/

//i++ => post-incremento => el valor de la variable se va a incrementar despues de q se utilice la expresion actual

//let x = 5;

//let y =x++;

//console.log(y);
//console.log(x);

//pre-incremento => ++i
//el valor de la variable incrementa antes de q se utilice

//let a = 6;
 
//let b = ++a;
//console.log(b);


/**
 * CICLO POR CONTEO
 * posee 3 partes
 * 
 * inicializacion (desde) => nos da la variable de control inicial
 * 
 * condicion (hasta) => se verifica antes de cada iteracion y nos dice si la condicion es verdadera.. el ciclo continua y si es falsa el ciclo termina
 * 
 * actualizacion => es la parte donde se genera el incremento o decremento de la variable
 * 
 * FOR => nosotros le decimos cuantas eces queremos q se ejecute el ciclo
 * 
 * for(inicializacion; condicion; actualizacion);
 * 
 */

//vamos a imprimir 10 veces un mensaje


//for(let i=0; i <= 10; i++){

// inicializacion => se ejecuta una vez al inicio
//la condicion => se evalua antes de cada iteracion => si es verdadero continua
//la actualizacion => se ejecuta al final de cada iteracion y suma
//se vuelve a sumar

 //   console.log("se imprimio el mensaje, i");
//}


//TABLA DE MULTIPLICAR
//X5

//let tablaDelCinco = 5;
//for(let i = 1; i <= 10; i++){
   // let resultado = tablaDelCinco * i;
   // console.log(tablaDelCinco + "x" + i + "=" + resultado)
//}

//for(let i =1; i<=5; i++){
    //sentencia que se llama continue, se usa para saltar un iteracion
    //y continua con lo siguiente
    //sentencia break si se utiliza automaticamente se frena el bucle y se sale

    //if(i === 3){
      //  break;
    //}
    //console.log(i)
//}


/**
 * WHILE => es una estructura de control q va a repetir un conjunto de instrucciones mientras se cumpla una condicion especifica
 * 
 * while(condicion){
 * bloque d codigo a ejecutar
 * }
 * 
 * 
 * let contador = 1;

while(contador <=10){
    console.log("numero:" + contador);
    contador++
}
 * 
 */


/**
 * DO...WHIE => se utiliza para ejecutar un bloque de codigo, al menos una vez y luego repetirlo mientras se cumpla una condicion especifica
 * 
 * do{
 * //bloque de codigo
 * } while (condicion)
 * 
 */

let clave;
let intentos = 3;

do{
    clave = prompt("Ingresar la contraseña");
    intentos ++;

    if (clave === 'clave123'){
        console.log("contraseña correcta")
        break;
    }

    if (intentos >= MAX_INTENTOS){
        console.log("la cantidad de intentos se alcanzo")
        break;
    }

} while (true);











