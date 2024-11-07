/**
 * Tipo entero y decimal
 */

const entero = 122;
const pi = 3.1416;

console.log(typeof entero, typeof pi);

// Notación Científica
const cientifico = 5e3;

// Infinitos y NaN
const infinito = Infinity;
const noEsUnNumero = NaN;

console.log(typeof infinito, typeof noEsUnNumero);

/**
 * Operaciones aritméticas
 */

// Suma, resta, multiplicación y división
const suma = 2+3;
const resta = 2-3;
const multiplicacion = 2*3;
const division = 2/3;

console.log(suma, resta, multiplicacion, division);

// Módulo y exponenciación
const modulo = 15 % 4;
const exponeciacion = 2**3;
console.log(modulo, exponeciacion);


// Presición
const resultado = 0.1 + 0.2;
console.log(resultado);
console.log(resultado.toFixed(1));
console.log(resultado === 0.3);


/**
 * Operaciones avanzadas
 */

const raizCuadrada = Math.sqrt(9);
const valorAbsoluto = Math.abs(-5);
const numeroAleatorio = Math.random();

console.log(raizCuadrada, valorAbsoluto, numeroAleatorio);