// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.
// Crear el array de meses
let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

// Obtener el elemento <ul> del documento HTML
let listaMeses = document.getElementById("lista-meses");

// Recorrer el array y crear un <li> para cada mes
for (let i = 0; i < meses.length; i++) {
  let mes = meses[i];
  let li = document.createElement("li");
  let texto = document.createTextNode(mes);
  li.appendChild(texto);
  listaMeses.appendChild(li);
}
