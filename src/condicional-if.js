let nombre = 'Lalo';

if (nombre === 'Edu') {
    console.log('Hola sabroso');
} else if (nombre === 'Lalo') {
    console.log('Hola guapo');
} else {
    console.log('Hola perrillo');
}

const numeroSecreto = Math.floor(Math.random() * 100 + 1);

const numeroJugador = parseInt(prompt('Adivina el numero secreto'));

console.log(`número del man: ${numeroJugador}`);
console.log(`número secreto: ${numeroSecreto}`);

if (numeroJugador === numeroSecreto) {
    console.log('Adivinaste');
} else if (numeroJugador > numeroSecreto) {
    console.log('Te pasaste de lanza');
} else if (numeroJugador < numeroSecreto) {
    console.log('Te faltaron jsjsjsjs');
} else {
    console.log(`Sorete, el chido es ${numeroSecreto}`);
}