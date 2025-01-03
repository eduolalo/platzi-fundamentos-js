const greeting = function (name) {
    return `Hola ${name}`;
}

const greeting2 = (name) => {
    return `Hola ${name}`;
}

const greeting3 = (name) => `Hola ${name}`;

const greeting4 = name => `Hola ${name}`;

// Lexical binding

const fictionalCharacter = {
    name: 'Tío Elber',
    messageFunction: function (mssj) {
        return `El ${this.name} te manda ${mssj}`;
    },
    messageArrowFunction: (mssj) => {
        return `El ${this.name} te manda ${mssj}`;
    }
}

console.info(fictionalCharacter.messageFunction('besitos '));
console.info(fictionalCharacter.messageArrowFunction('para tus tunas'))