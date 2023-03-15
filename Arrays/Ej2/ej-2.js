// Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// Crear un arreglo vacío
let ciudades = [];

// Pedir al usuario que ingrese ciudades y agregarlas al arreglo
while (true) {
  let ciudad = prompt("Ingresa una ciudad (presiona Cancelar para terminar):");
  if (ciudad === null) {
    break; // Si el usuario presiona Cancelar, terminar el bucle
  }
  ciudades.push(ciudad); // Agregar la ciudad al arreglo
}

// Mostrar el arreglo generado
console.log(ciudades);
document.write("El arreglo es: " + ciudades + "<br>");

// Mostrar la longitud del arreglo
console.log("La longitud del arreglo es: " + ciudades.length);
document.write("La longitud del arreglo es: " + ciudades.length + "<br>");

// Mostrar los ítems de las posiciones primera, tercera y última
document.write("El primer elemento del arreglo es: " + ciudades[0] + "<br>");
document.write("El tercer elemento del arreglo es: " + ciudades[2] + "<br>");
document.write(
  "El último elemento del arreglo es: " + ciudades[ciudades.length - 1] + "<br>"
);

// Añadir la ciudad de París en última posición
ciudades.push("París");

// Escribir por pantalla el elemento que ocupa la segunda posición
document.write("El segundo elemento del arreglo es: " + ciudades[1] + "<br>");

// Sustituir el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
ciudades[1] = "Barcelona";

// Mostrar el arreglo actualizado
console.log(ciudades);
