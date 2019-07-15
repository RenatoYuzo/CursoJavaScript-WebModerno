let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

// Tudos os numeros inteiros sao verdadeiros com excessao do Zero
console.log(!!3); // true
console.log(!!-1); // true
console.log(!!" "); // true
console.log(!!"texto"); // true
console.log(!![]); // true
console.log(!!{}); // true
console.log(!!Infinity); // true
console.log(!!(isAtivo = 33)); // true

// valores falsos
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = 0));

console.log(!!('' || null || 0 || "texto"));

let nome = "";
console.log(nome || "Desconhecido");