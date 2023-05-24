// Ejercicio [11]
// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numbers) {

    let sumNumbers = 0;

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        sumNumbers = sumNumbers + number;
    }
    return sumNumbers / numbers.length;
}

const getAverage = average(numbers);
console.log(getAverage);