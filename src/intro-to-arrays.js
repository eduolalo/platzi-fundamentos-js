
// New Array
const fruits = Array('Manzana', 'Plátano');

console.log(fruits);

const numbers = Array(1,2)

console.log(numbers)

// Literal

const oneNumber = [1];
console.log(oneNumber)

const emptyArray = [];
console.log(emptyArray);

const sports = ['Alpinismo', 'ciclismo', 'Crossfit', 'Natación'];
console.log(sports)

const manyValues = [
    'hola',
    1,
    { 'algo': 'otro' },
    [1,2,3],
    true
]

console.log(manyValues);

// Access to array elements

console.log(fruits[0]);

console.log(fruits.length);

// mutability 
fruits.push('Sandía');
console.log(fruits)

// inmutability
const newFruits = fruits.concat(['uva', 'fresa']);
console.log(fruits);
console.log(newFruits);

// checking if is array
const isArray = Array.isArray(fruits);
console.log(isArray);

// Exercise

const numberArray = [1,2,3,4,5];

let sum = 0;

for (let i=0; i < numberArray.length; i++) {
    sum += numberArray[i];
}

console.log(sum)