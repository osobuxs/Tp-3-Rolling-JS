// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)
function calcularPerimetro(event) {
  event.preventDefault(); // Evitamos que el formulario recargue la página

  // Obtenemos los valores de los lados
  let ladoA = parseFloat(document.getElementById("ladoA").value);
  let ladoB = parseFloat(document.getElementById("ladoB").value);

  // Calculamos el perímetro
  let perimetro = 2 * (ladoA + ladoB);

  // Mostramos el resultado en pantalla
  document.getElementById(
    "resultado"
  ).textContent = `El perímetro del rectángulo es: ${perimetro}`;
}
