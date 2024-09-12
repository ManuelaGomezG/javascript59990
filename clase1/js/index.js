//GENERAR COMEMTARIO EN UNA SOLA LINEA

/*
GENERAR COMENTARIOS

let saludo = "saludo";
    console.log(saludo)

*/

/**
 * VARIABLE = es un contenedor que almacena datos, pueden ser numerico, cadena de caracteres (string), booleano, objetos, funciones..
 * variable = palabra clave (var, let o const) seguido de un nombre (tiene que hacer referencia al dato que va a alojar) = dato ;
 * 
 * 
 * SCOPE =  se refiere a ambito, hace referencia al contexto en el que la variable va a ser visible o accesible. Es de donde se va a poder acceder.
 * 
 * 
 * var => no se recomienda, se usaba en versiones antiguas de js. scope de tipo global.
 * 
 * var numero = 18;
 * 
 */

/**
 * let => tiene un scope de bloque, y solo va a existir esta variable dentro del bloque de codigo donde fue declarado. El dato que se aloja dentro de la variable "let" puede modificarse. Utilizan camelCase.
 * 
 * const => es una variable de tipo constante. Que no se va a poder modificar, son valores fijos. En bloque. Las constantes se crean utilizando VEINTE_Y_DOS (snakeCase) => esto se utiliza para diferenciar let y const en nuestros codigos
 * 
 * 
 * caseSensitive
 * let ROSA = 1
 * let Rosa = 2
 * let rosa = 3
 */

// variable declarada
//let numero;


//variable asignada
//numero = 1;


//variables declaradas e inicializadas
//let veinteYUno = 21;
//console.log(veinteYUno);  /*numerico*/ 

//veinteYUno = "veinte y uno"
//console.log(veinteYUno);   /*string*/ 
/*
las cadenas de caracteres se escriben entre "" o '' 
*/


//const VEINTE_Y_DOS =22;
//console.log(VEINTE_Y_DOS);

//VEINTE_Y_DOS = "veinte y dos";
//confirm.log(VEINTE_Y_DOS);

// console.log es una funcion que nos permite imprimir mensajes o valores en nuestra consola del navegador


/**
 * OPERADORES
 * 
 * +
 * -
 * /
 * *
 * %
 * 
 */
/*prompt()
como sentencia y funcion me permite a mi que el usuario introduzca informacion.
Todos los datos q almace prompt se guardan como caracteres.. ara poder usar numeros y usarlos como tal .. se escribe parseInt(prompt(""))
*/ 

let numeroUno =  parseInt(prompt("Porfavor ingresa un numero"));
let numeroDos = parseInt(prompt("Ingresa otro numero"));

let suma = numeroUno + numeroDos;

console.log("el resultado de la suma es " + suma);


let palabraUno = "cinco";
let palabraDos = "seis";

let palabras = palabraUno + "" + palabraDos;

confirm.log(palabras);
