function outerFunction () {
    let outerVariable = 'Afuera tu no existes';

    function innerFunction () {
        outerVariable += ', solo entro';
        console.log(outerVariable);
    }

    return innerFunction;
}

const clousureExample = outerFunction();
clousureExample();


function createCounter () {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2501866178.
    let count = 0;

    return function () {
        return ++count;
    }
}

const counter = createCounter();
console.log(counter());
console.log(counter());

const counter2 = createCounter();
console.log(counter());
console.log(counter());


function outerFunction2 () {
    let greeting = 'Hola';

    return function innerFunction (name) {
        console.log(`${greeting} ${name}`);
    }
}

const saludo = outerFunction2();
saludo('Juan');
saludo('Pedro');