// 1 ingresar valores de productos mediantes un prompt
// 2 que el usuario escriba "terminar" para finalizar la carga de productos
// 3 que esos valores se sumen y de un resultado en pantalla




// 1

let input;
let total = 0;

while(true){
    input = prompt("ingresa el valor del producto o escribe 'terminar' para finalizar")

    if(input.toLowerCase() === 'terminar'){
        break;
    }

    let valorProducto = parseFloat(input);

    //isNan refiere a q lo q se esta inglresando NO es un numero
    if(!isNan (valorProducto) && valorProducto >= 0){
        total += valorProducto;
        console.log(total);
    }else{
        alert("por favor ingreesa un numero correcto")
    }



/*
la funcion isNan verifica si el valor basado no es un numero y el operador !(not) se utiliza para negar el resultado de isNnan
true=> falso
flaso=> verdadero
*/

}
console.log("el valor total sumado de los productos es "+ total.toFixed(2))
/*
para convertir un numero a dato string

podemos usar:

string(variableNumero)
variable.toString

*/











