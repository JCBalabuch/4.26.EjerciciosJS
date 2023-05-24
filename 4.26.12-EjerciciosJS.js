// Ejercicio [12]
// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo
// contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

const averageWord = (mixedElements) => {
    let sumElements = 0;

  for (let i = 0; i < mixedElements.length; i++) {
    const element = mixedElements[i];
    if (typeof element === 'number') {
      sumElements = element + sumElements;
    } else {
      sumElements = element.length + sumElements;
    }
  }
  return (sumElements / mixedElements.length)
};

console.log(averageWord(mixedElements));

