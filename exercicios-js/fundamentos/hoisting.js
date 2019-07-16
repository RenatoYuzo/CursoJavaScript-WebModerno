// HOISTING EH A SUBIBA DA DECLARACAO DA VARIAVEL, POREM EH MUITO
// RUIM USA-LA, SOH ATRAPALHA E COMPLICA O CODIGO
console.log("a =", a);
var a = 2;
console.log("a =", a);

// LET NAO SOFRE O HOISTING
console.log("b =", b);
let b = 3;
console.log("b =", b);
