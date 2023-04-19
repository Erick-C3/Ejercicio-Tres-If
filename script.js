/**
 * Requisitos?
 *  - poder recibir 3 numeros
 *  - verificar:
    *  - si hay 3 numeros iguales gana primer premio
    *  - si hay 2 numeros iguales gana segundo premio
    *  - si son todos diferentes entonces gana un helado!
 * 
 * info ?
 *  - 
 * 
 */

let numRecibidoUno = prompt("Ingrese primer numero");
let numRecibidoDos = prompt("Ingrese segundo numero");
let numRecibidoTres = prompt("Ingrese tercer numero");

if( (numRecibidoUno == numRecibidoDos) && (numRecibidoUno == numRecibidoTres) ){
    document.write("Felcidades! GANASTE EL PRIMER PREMIO! :D");
}else if( ((numRecibidoUno == numRecibidoDos) || (numRecibidoUno == numRecibidoTres)) || (numRecibidoDos == numRecibidoTres) ){
    document.write("Felcidades! Ganaste el segundo premio!");
}else{
    document.write("Felcidades! Ganaste un helado!");
}