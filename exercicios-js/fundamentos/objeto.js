const prod1 = {}; // objeto vazio
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4998.90;
prod1["Desconto"] = 0.40;

console.log(prod1);

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90,
    vetor: [1,2,3],
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
prod2["Desconto"] = 0.45;

console.log(prod2);