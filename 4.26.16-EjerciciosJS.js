// Ejercicio [16]
// Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la
// función .includes de javascript.

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];


const includeCamiseta = (products) => {
  const camisetas = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (products[i].includes("Camiseta")) {
      camisetas.push(product);
    }
  }
  console.log(camisetas);
};

includeCamiseta(products);