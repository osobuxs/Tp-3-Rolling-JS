// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function determinarParidad(numero) {
  if (numero % 2 == 0) {
    return "El número " + numero + " es par.";
  } else {
    return "El número " + numero + " es impar.";
  }
}

function mostrarResultado() {
  let numero = parseInt(document.getElementById("numero").value);
  let resultado = determinarParidad(numero);
  document.getElementById("resultado").innerHTML = resultado;
}
