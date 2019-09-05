exports.fazAlgo1 = function(){
    return new  Promise(function (resolve,reject) {
       // setTimeout(() => {
            resolve(Math.round(Math.random()));
        //}, 1000);
    });
};

exports.fazAlgo2 = function(numero){
    return new  Promise(function (resolve,reject) {
        //setTimeout(() => {
            resolve(numero * 5);
        //}, 2000);
    });
};

exports.fazAlgo3 = function(numero){
    return new  Promise(function (resolve,reject) {

        //setTimeout(() => {
            if (numero > 300) {
                return reject("Numero > 300");
            }
            resolve(numero + 2);
        //}, 1500);
    });
};

exports.erroCallBack = function(error) {
    console.log(` Deu ruim maostra a trajedia: ${error} `);
};
