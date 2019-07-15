const escola = "Coder";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); // Apesar de dar OutOfIndex, no JavaScript nao dá erro
console.log(escola.charCodeAt(3)); // Valor uniode na tabela ASCII
console.log(escola.indexOf("3")); // Tenta achar, se nao achar retorna -1
console.log(escola.substring(1)); // Pega tudo apartir do indice 1
console.log(escola.substring(0, 3)); // Pega tudo do indice 0 ao indice 3
console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!");
console.log(escola.replace("e", "3"));
console.log("Ana,Maria,Pedro".split(",")); // Vira uma array