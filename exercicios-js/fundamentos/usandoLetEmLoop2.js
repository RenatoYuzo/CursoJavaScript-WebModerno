const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}

// POR CAUSA DO LET, ELE ESTA REFERENCIANDO CERTO CADA VALOR INCREMENTADO
funcs[2]();
funcs[8]();