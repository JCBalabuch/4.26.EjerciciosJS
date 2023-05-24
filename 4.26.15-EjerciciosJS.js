// Ejercicio [15]
// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo
// conforma. Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

const repeatCounter = (counterWords) => {
  let repeated = [];

  counterWords.forEach((word) => {
    repeated[word] = (repeated[word] || 0) + 1;
  });
  console.log(repeated);
};

repeatCounter(counterWords);

