// filter

const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(numbers);
console.log(evenNumbers);

// reduce [case 1]

const numbersReduce = [1,2,3,4,5];
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// reduce [case 2]

const words = ['manzana', 'plátano', 'hola', 'adios', 'plátano'];

const wordFreq = words.reduce((accom, actual) => {
    if (accom[actual]){
        accom[actual]++;
    } else {
        accom[actual] = 1;
    }
    return accom
}, {});

console.log(wordFreq);