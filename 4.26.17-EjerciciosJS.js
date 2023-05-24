// Ejercicio [17]
// Probando For...of: Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.
// Puedes usar este array:

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

const places = (placesToTravel) => {

  for (const place of placesToTravel) {
    console.log(place);
  }
};

console.log(places(placesToTravel));
