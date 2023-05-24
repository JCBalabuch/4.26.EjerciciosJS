// Ejercicio [14]
// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de
// dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la
// contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

const finderName = (search) => {
  nameFinder.forEach((name, i) => {
    if (search === name) {
      console.log(name, i);
    }
  });
};

finderName('Peter');
finderName('Steve');
finderName('Tony');
finderName('Natasha');
finderName('Clint');
finderName('Logan');
finderName('Xabier');
finderName('Bruce');
finderName('Peggy');
finderName('Jessica');
finderName('Marc');
finderName('Jeniffer');
