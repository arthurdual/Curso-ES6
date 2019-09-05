
/* jshint esversion:6*/
/*function notificaUsuario(sms,email) {
    console.log("começa notificaçao");
    setTimeout(() => {
        sms();
    },1* 1000);
    setTimeout(() => {
        email();
    }, 2000);
    
    
    
}
notificaUsuario(
    function () {
        console.log("sms notificado");
    },
    function (){
        console.log("email notificado..");
    }
);
console.log("EnD");

*/

function soma(x,y) {
    let verificaNumNegativo = ()=>{
        return x<0 ||y<0;
    };
    var p = new Promise(function (resolve,reject) {
        if (verificaNumNegativo()) {
            reject(Error("Nao permitido numeros negativos!"));
        }
        resolve(x +y);
    });
    return p;
    
}


console.log(soma(5,6));

soma(5,6).then((res)=>{
    console.log("Soma é: "+ res);
}).catch((erro)=>{
    console.log("ERRO "+ erro);
});
console.log("end");

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
//https://blog.matheuscastiglioni.com.br/trabalhando-com-promises-em-javascript/

/*
Como uma Promise faz?
Ao criar uma Promise, a mesma começa em estado inicial como pendente (pending), assim, os estados que ela pode ir são os demais informados anteriormente. Se ela estiver no estado de resolvida (resolved) é porque tudo deu certo, ou seja, a Promise foi criada e processada com sucesso, porém, em casos de falhas, a mesma estará no estado de rejeitada (rejected).

Uma das maneiras de fazer esse tratamento é através das funções then e catch, para sucesso ou falha respectivamente (mais á frente será exemplificado e explicado).

Saiba mais
O estado realizada (fulfilled) é quando a Promise foi resolvida, ou seja, assim que invocamos a função resolved da mesma.

O estado estabelecida (settled) é quando a Promise foi resolvida ou rejeitada, ou seja, se o seu estado não está como pendente.

Sim, esses dois estados são um pouco confusos, mas não se preocupe, no dia-à-dia vamos utilizar mais os estados de Resolvida e Rejeitada.
Porque utilizar uma Promise?
Quando utilizamos funções assíncronas, não conseguimos garantir o fluxo de nosso código, ou seja, um trecho de código que está localizado após uma função assíncrona pode ser executado antes da mesma ter sido realizada, 
Quando utilizar uma Promise?
Podemos utilizar Promises para diversos motivos, um deles que eu acho bem interessante é para realizar animações de processamento ou carregamento, deixamos um ícone com a animação até a Promise ser realizada, dando uma boa interatividade ao o usuário.



*/