 /*  ABSTRACCION => es la manera en la q podemos reducir la complejdad y permitir una implementacion y diseño eficiente de datos

1. evitamos duplicado de codigo
2. poder crear multiples instancias con una sola abstraccion
3.encapsular datos
4.evitamos codigo de bajo nivel


function sumar(a,b){
    return a + b
}
console.log(sumar(3,5))
 */





/*
//FUNCIONES DE ORDEN SUPERIOR

es una funcion que toma una o mas funciones cmo argumento o devuelve una funcion como resultado


function mayorQue (x){
    return(num) => num > x;
}

const mayorQueDiez = mayorQue(10);
const mayorQueVeinte = mayorQue(20);

console.log(mayorQueDiez(9))


*/


/*
function asignarOperacion (operacion){
    if(operacio === "sumar")
        return function(numero1, numero2){
    return numero1 + numero2
}else if (operacion === "restar"){
    return (numero1, numero2) => numero1 - numero2
}
}
*/

/*functuion q tome 2 numeros, operacio


function operar(num1, num2, operacion){
    return operacion (num1, num2)
}

function suma (a , b){
    return a + b
}
function resta(a , b){
    return a - b
}
function multiplicar (a, b){
    return a * b
}

function dividir (a , b){
    return a/ b
}

console.log (operar(5,3,multiplicar))
console.log (operar(5,3,resta))


*/

/*FOREACH
forEach

primero hay q tener un array 
es una funcion que se utiliza para iterer sobre elementos de un array y permite ejecutar una funcion para cada elemento del array

parametros
1. elemento = elemento actual de arry que se procese
2. indice (opcional) el indice actual del elemento
3. arreglo (opcional)

const frutas = ['manzana', 'pera','kiwi','naranja']


frutas.forEach(function(frutas, indice){
    console.log('${indice} : ${frutas}')
})

const numeros = [2,4,6,8];
let suma = 0;

numeros.forEach(numero => {
    suma = 0;

    numeros.forEach(numero => {
        suma += numero
    })
})

console.log(suma)






const PERSONAS = [
    {
    nombre: 'pedro',
    edad: 25
    },
    {
    nombre: 'juan',
    edad:30
    },
    {
    nombre: 'maria',
    edad: 19
    },
    {
     nombre: 'cristian',
     edad: 18
    },
    {
    nombre: 'cristofer',
    edad: 16
    }

]


const NOMBRES = []
PERSONAS.forEach(persona => {
    NOMBRES.push(persona.nombre)
})
console.log(NOMBRES)


*/


//



/*
//FIND => devolver el primer elemento de un array que cumpla con una condicion dada, si no cumple ninguna condicion devuelve un undefined

const numeros = [5,6,7,8];
const primerPar = numeros.some(num =>num % 2 === 0);
console.log(primerParpar)






const NOMBRE_BUSCADO = "maria";
let estudianteEncontrado = PERSONAS.find (persona => personalbar.nombre === NOMBRE_BUSCADO)

if (estudianteEncontrado){
    console.log('estudianteEncontrado: ${estudianteEncontrado.nombre')
}
*/




/*
FILTER => nos va a devolver un nuevo arreglo, con todos los elementos que pasen las condiciones dadas por el programador

let edad = [15,20,22,16,40];
let mayoresDeEdad = edad.filter(edad => edad >= 18);
console.log(mayoresDeEdad);
*/


/*
SOME => verifica su un elemento en el arreglo cumple o no con la condicion dada. Devuelve true si al menos un elemento pasa la prueba y false si no pasa


const numeros = [1,3,5];
const par = numeros.some(num =>num % 2 === 0);
console.log(par)

*/


/*
MAP => nos devuelve un nuevo array con los resultados de aplicar una funcion sobre los elementos del array originañ

const PRECIOS = [100,200,150,300];

let precioAumento = PRECIOS.map(precio => precio *1.5);
console.log(precioAumento)
*/

/*
REDUCE =>reduce una array a una unica expresion


const PRECIOS.reduce((acum, num)=> acum + num,0);
console.log(suma)




const totalCarrito = PRECIOS_CARRITO.reduce((acum, num,2) => acum + num, 2);
console.log(totalCarrito)


let totalVentas = 0;
for(let i = 0; i< PRECIOS_CARRITO.length; i++){
    totalVentas += PRECIOS_CARRITO[i];
}
console.log(totalCarrito)

*/



/*
SORT => me permite ordenar un array, siempre y cuando se declare una fucnion de declaracion


const numeros = [5,4,10,25,30]
numeros.sort((a ,b) => a - b); => se ordena el codigo de manera creciente
numeros.sort((a ,b) => b - a); => se ordena de manera decreciente
console.log(numeros)

const string = ['manzanas', 'Banana','anana','kiwi']
string.sort((a,b)=>b.localeCompare(a))
console.log(string)
*/












