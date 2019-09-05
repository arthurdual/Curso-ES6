//callback from hell
//codigo com varios callbacks 
//codigoo verticalizado / encadeado
//js 5

fazAlgo1(function (primeiroResultado) {
    fazAlgo2(primeiroResultado, function (segundoResultado) {
        fazAlgo3(segundoResultado, function (terceiroResultado) {
           console.log("ufa chegou no fim: " + terceiroResultado); 
        }, erroCallback);
    }, erroCallback);
}, erroCallback);


//no ES6

fazAlgo1()
    .then(function (primeiroResultado) {
        return fazAlgo2(primeiroResultado);
    })       
    .then(function (segundoResultado) {
        return fazAlgo3(segundoResultado);
    })   
    .then(function (primeiroResultado) {
        console.log("ufa chegou no fim: " + terceiroResultado);
    })
    .catch(erroCallback);