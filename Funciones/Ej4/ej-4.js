// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function mostrarTabla() {
  // Obtenemos el número ingresado por el usuario
  let numero = parseInt(document.getElementById("numero").value);

  // Creamos la tabla de multiplicar
  let tabla = "";
  for (let i = 1; i <= 10; i++) {
    let producto = numero * i;
    tabla += `<li>${numero} x ${i} = ${producto}</li>`;
  }

  // Mostramos la tabla en pantalla
  document.getElementById("tabla").innerHTML = tabla;
}
