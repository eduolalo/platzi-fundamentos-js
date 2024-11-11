// explicit type casting

const string = '42';
const integer = parseInt(string);
console.log(integer, typeof integer);

const stringDecimal = '3.14';
const decimal = parseFloat(stringDecimal);
console.log(decimal, typeof decimal);

const binary = '1010';
const integerBinary = parseInt(binary, 2);
console.log(integerBinary, typeof integerBinary);


// implicit type casting
const sum = '5' + 3;
console.log(sum, typeof sum);

const sumBool = '3' + true;
console.log(sumBool, typeof sumBool);

const sumWithNumber = 2 + true;
console.log(sumWithNumber, typeof sumWithNumber);

const stringValue = '10';
const numberVal = 10;
const boolVal = true;
console.log(stringValue + stringValue);
console.log(stringValue + numberVal);
console.log(stringValue + boolVal);

console.log(numberVal + numberVal);
console.log(numberVal + stringValue);
console.log(numberVal + boolVal);

console.log(boolVal + boolVal);
console.log(boolVal + stringValue);
console.log(boolVal + numberVal);