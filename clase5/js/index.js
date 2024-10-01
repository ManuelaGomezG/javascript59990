
//FUNCIONES ANONIMAS Y FUNCIONES FLECHA


/*

function nombre(parametros){
         //ejecutar
         return
}

nombre (argumentos)

FUNCION ANONIMA => no posee un nombre especifico. se define en el momento, se puede asignar a una variable

las funciones anonimas se usan en callbacks de funcines de orden superior (mas adelante se ve)
En la creacion de modulos
Cuando sabemos q no la reutilizaremos



let suma = function(a, b){
    return a + b;
}

console.log(suma(5, 3));

*/




/*

FUNCION FLECHA =>

let suma = (a,b) => {
    return a + b
    }

    Sintaxis mucho mas concisa (se utilizan mas q nada en funcines cortas)
    No posee argumentos
    o poree return.. la flecha lo implica
    Cuando la funcion se expresa en una sola linea no hay necesidad de poner {}
Si se expresa en mas de ua linea si se necesitan las llaves 
{}





let suma = (a,b) => a + b;

console.log(suma(3,4));


*/




/*
Funcines normales vs Funciones flechas


Funcion flecha
  Sintaxis limpi y concisa
  Necesitamos mantener el concepto de this (objetos)
  Cuando trabajamos con arrays


Funcione normlaes
  Hablamos de de un contexto propio de this
  Cuando necesitamos accedes a argumentos
  Cuando creamos un objeto
  Cuando son funciones complejas

*/




//OBJETOS

/*
Es algo que tiene varias caracteristicas => una coleccion de propiedades
Donde cada propiedad de compone de un valor y una clave
En js se utiliza para almacenar datos y funciones

let nombre = {
   //coleccion de propiedades
   clave: valor,
   clave1: valor1,
}

*/

/*

let persona ={

    nombre: "Pedro",
    edad: "31",
    estudios: "Programacion",
}

console.log(persona)

console.log(persona.estudios)



let producto ={

    id: 1,
    nombre: "jarron Manuelal",
    material: "marmol",
    color: "blanco con camel",
    precio: 15000,
}
 console.log(producto.nombre)
  producto.color = "negro";
  console.log(producto)


*/


//CONSTRUCTORES

/*
Nos permite crear objetos a part



1. Tenemos q definir una funcion q inicia las propiedades del objeto

2. Tenemos que pasarle informacion a traves de una palabra clave llamada "new"

Para reconocer un objeto constructor escribimos su primera letra en mayuscula

This es una palabra q refiere al contexto de ejecucion. El valor puede cambiar dependiendo de como invoquemos a la funcion



Instanciar => refiere al proceso de crear un objeto apartir de una clave



function Auto(marca,modelo,año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = anio;
    this.info = function(){
        return '${this.marca}, ${this.modelo}, ${this.anio}'
}
}
let auto1 = new Auto('toyota','corolla', 2021)
let auto2 = new Auto('honda','civic', 2020)

console.log(auto1.info());

console.log(auto2);


 */






//CLASES => manera mas moderna de crear objetos, es mas facil en cuanto a la sintaxis y mas clara
/*
las clases funcionan d ela siguiente manera:
entro de la clase se crea un constructr q nos sirve para inicializar las propiedades del objeto



class Auto {
    constructor(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.año = anio;

    }

    info(){
        return '${this.marca}, ${this.modelo}, ${this.anio}'
    }

}

let auto1 = new Auto('honda', 'civic', 2021)

*/

class Persona {
    constructor(nombre, edad, calle, ciudad, codigoPostal, habilidades){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = {
            calle: calle,
            ciudad: ciudad,
            codigopostal: codigoPostal
        }
        this.habilidades = habilidades;
    }
    mostrarInfo(){
        console.log('nombre $this.nombre')
    }
}


const Juan = new Persona(
    "juan",
    30,
    "guido",
    "mar de plata",
    7600,
    "tocar piano"
)

console.log('juan.direccion'["calle"]);









