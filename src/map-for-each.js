// Map

const numbers = [1,2,3,4,5];
const square = numbers.map(num => num * num);

console.log(numbers);
console.log(square);

// forEach

const colors = ['rojo', 'azul', 'rosa'];

const iterated = colors.forEach(color => console.log(color));

console.log(colors)
console.log(iterated);

// Exercise: Fahrenheit

const temperaturesInFahrenheit = [32, 68, 104, 212];
const temperaturesInCelsius = temperaturesInFahrenheit.map(temp => (temp - 32) * 5/9);

console.log(temperaturesInFahrenheit);
console.log(temperaturesInCelsius);

// Exercise Sum elements

const newNumbers = [1,2,3,4,5];
let sum = 0;

newNumbers.forEach(num => sum += num);

console.log(sum);
