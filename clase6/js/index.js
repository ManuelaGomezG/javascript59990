
/**
 * ARRAYS
 * Un array es una lsta o estructura de datos que se utiliza para almacenar una coleccion de valores
 * 
 * Pueden ser valores de cualquier tipo: booleanos, numeros, string , objetos, arrays..
 * 
 * let array = []; //un array vacio sin informacion
 * 
 * los arrays SIEMPRE INICIA con posicion 0
 * 
 * por consola pordemos ver la palabra "lengh" q nos indica la cantidad de elementos en el array
 * 
 * (funciones)
 * {objetos}
 * [arrays]
 * 
 */






/*

let numeros = [1, 2, 3, 4, 5];
let boolean = [true, false, true, false];
let mixto = [1, "numero", false, 2];

let pokemon =[

    {
        pokemon: "pikachu",
        tipo: "electrico"
    }, {
        pokemon: "ivi",
        tipo: "normal"
    }, {
        pokemon: "lugia",
        tipo: "legendario"
    }


console.log(numeros)
console.log(boolean)
console.log(mixto)
console.log(strings[2])

for (let i = 0; i < pokemon.length; i++){
    console.log(pokemon[i])
    //esto me devuelve el onjeto entero
    console.log(pokemon[i].pokemon)
}

]


*/

//LENGH es una de las propiedades de array => sirve para darnos o devolvernos la cantudad de elementos q tiene el array

/**
 * metodos en array son funciones incorporadas en js que nos vana  permitir realizar alguna operaciones de manera rapida
 * 
 * 
 */


//let strings = ["numero", "perro", "jaime", "tyrion"];

//metodo PUSH => para agregar elementos al final del array
/*
strings.push("juan pablo andueza", "pepe")

console.log(strings)
*/
 


// metodo POP => elimina un elemento o varios del array cuando estan al final
/*
strings.pop();
console.log(strings)

*/



//metodo UNSHIFT => agregua elemento al inicio del array
/*
strings.unshift("brian sarmiento")
console.log(strings)
 */

//metodo SHIFT => elimina elementos al inico del array
/*
strings.shift()
console.log(strings)
*/


//metodo SPLICE => se utiliza para modificar el array eliminado agregando o reemplazando elementos en posociones especificas
/*
let strings = ["numero", "perro", "jaime", "tyrion"]

let miNuevoArray = string.splice(1, 2);
console.log (miNuevoArray)

*/


//el metodo JOIN nos convierte los elementos de un array en una cadena de texto y los une atraves de un separador

/*
let strings = ["numero", "perro", "jaime", "tyrion"];
let pasoAString = strings.join(" ");

console.log(pasoAString)

*/


//metodo INDEXOF (indexOf ) nos sirve para buscar el primer elemento de un array que se repita o el q yo este buscando


/*
let frutas = ["manzana", "pera", "banana","manzana"]
let indice = frutas.indexOf("manzana");

console.log("el indice de manzana es: " + indice)
*/


//INCUDE => me dice si un elemento existe o no, en el array nos duvuelve un booleano

/*
let existe = frutas.includes("frutilla");
console.log(existe)

*/


//CONCAT => se utiliza para combinar 2 o mas arryus en uno nvo

/*
let array1 = [1, 2, 3, 4]

let array2 = [5, 6, 7, 8]
let array3 = [9, 10, 11, 12]

let arrayCombinado = array1.concat(array2, array3)

console.log(arrayCombinado)
*/

//SLICE => se usa pasa sacar un a porcon de un array y devolverlo en uno nvo. No modifica el array original

/*
let alumnos = ["franco", "stefany", "natalia", "jonathan"]

let aprobados = alumnos.slice(1,3)
console.log(aprobados)
console.log(alumnos)

let desaprobados = [alumnos[0], alumnos[alumnos.length-1]] 
//nvo array busco indice 0 y volvemos a llamar a los alumnos para q ecorra todo elarray
console.log(desaprobados)
*/


//FOR ..OF => estructura de control de  flujo para recorrer y operar en elementos iterables

/*
const Lenguajes = ["ingles", "italiano", "espaniol", "frances"]

for (const Lenguaje of Lenguajes){
    console.log(Lenguaje);
}
*/

//CARRITO DE PRODUCTOS Q SUMA EL TOTAL DEL PRECIO DE LOS PRODUCTOS

const carrito = [
    {
        producto: "camiseta",
        precio: 20
    },
    {
        producto: "zapatillas",
        precio: 30
    },
    {
        producto: "pantalones",
        precio: 40
    },
]

let precioTotal = 0;

for (const producto of carrito){
    precioTotal += producto.precio; 

}
console.log ("el precio total es: " + precioTotal)


