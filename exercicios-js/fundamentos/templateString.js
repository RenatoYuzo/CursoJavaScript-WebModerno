const nome = "Renato";
const concatenacao = "Olá " + nome + "!";
const template = `Olá ${nome}`;

console.log(template);

// expressoes . . .
console.log(`1 + 1 = ${1 + 1}`);

// Declarando uma funcao
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}`);