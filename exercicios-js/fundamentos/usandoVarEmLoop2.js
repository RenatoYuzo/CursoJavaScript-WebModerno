const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}

// POR CAUSA DO VAR, ELE ESTA REFERENCIANDO SEMPRE O ULTIMO VALOR DE VAR QUE EH 10
funcs[2]();
funcs[8]();