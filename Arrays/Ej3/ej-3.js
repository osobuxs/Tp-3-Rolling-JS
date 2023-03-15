// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let resultados = new Array(11).fill(0); // Crear un arreglo con 11 elementos, todos inicializados a cero

for (let i = 0; i < 50; i++) {
  // Lanzar dos dados
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;

  // Sumar los resultados de los dados
  let suma = dado1 + dado2;

  // Contar el número de veces que aparece cada suma
  resultados[suma - 2]++;
}

// Mostrar los resultados
console.log(resultados);
document.write("suma 2:" + resultados[0] + "<br>");
document.write("suma 3:" + resultados[1] + "<br>");
document.write("suma 4:" + resultados[2] + "<br>");
document.write("suma 5:" + resultados[3] + "<br>");
document.write("suma 6:" + resultados[4] + "<br>");
document.write("suma 7:" + resultados[5] + "<br>");
document.write("suma 8:" + resultados[6] + "<br>");
document.write("suma 9:" + resultados[7] + "<br>");
document.write("suma 10:" + resultados[8] + "<br>");
document.write("suma 11:" + resultados[9] + "<br>");
document.write("suma 12:" + resultados[10] + "<br>");
