// Ejercicio [18]
// Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

const alienData = (data) => {
  for (const item in data) {
    console.log(`${item}: ${data[item]}`);
  }
};

alienData(alien);
