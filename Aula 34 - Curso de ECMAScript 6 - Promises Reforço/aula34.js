let {
    fazAlgo1,
    fazAlgo2,
     fazAlgo3,
     erroCallBack
} = require("./Promises Reforço");

fazAlgo1()
    .then(primeiroResultado => fazAlgo2(primeiroResultado))
    .then(segundoResultado => fazAlgo3(segundoResultado))
    .then(terceiroResultado => {
        console.log("ufa chegou no fim: " + terceiroResultado);
    })
    .catch(erroCallback);

    
/*
fazAlgo1()
    .then(function (numero1) {
    console.log(`N1: ${numero1}`);
       return  fazAlgo2(numero1); 
    })
    .then(function (numero2) {
        console.log(`N2: ${numero2}`);
        return fazAlgo3(numero2); 
    })
    .then(function (numero3) {
        console.log(`N3: ${numero3}`);
        
    })
    .catch(erroCallBack);
*/

