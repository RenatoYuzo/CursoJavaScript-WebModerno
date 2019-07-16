// armazenando uma funcao em uma variavel
// chamamos de funcao anonima
const imprimirSoma = function (a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3);

// armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b;
}
console.log(soma(2, 3));

// retorno implicito
const subtracao = (a, b) => a - b; // soh funciona se o retorna for apenas 1 linha
console.log(subtracao(5, 1));

const imprimir = (a) => console.log(a);
imprimir("Legal!!!");