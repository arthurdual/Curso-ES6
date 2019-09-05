/*jshint esversion: 6*/


//#JavaScript - Como funciona o var, let e const? #01
//CollabCode

/*
Por a let ter um comportamento mais previsível,
nós evitamos ao máximo o uso da var.
Portanto podemos concluir que a let é uma variável
que podemos atribuir um novo valor para ela e a
mesma não tem o problema de escopo como apresentado
em variáveis que são criadas com a var.

const / constante(N pode ter o valor alterado)
Ela também não tem o problema de escopo mas
você também  não pode atribuir um novo valor
para uma variável criada com const.

*/
//usando var
function imprimeIdadeVar(){
    for(var idade = 30; idade <= 100; idade++) {
        console.log(`idade do arthur ${idade}`);
    }
    //a variavel idade n deveria aparecer fora do for,
    //ela vaza do for causando um comportamento imprevisivel
    //console.log(`idade do arthur ${idade}`);

    if(true){
        var nome ='arthur';
    }
    //a variavel nome n deveria aparecer fora do if pois foi criada dentro dele,
    //ela vaza do if causando um comportamento imprevisivel
    console.log(`Fora if ${nome}`);
    console.log(`fora do for ${idade}`);
    /*
       o var tem um problema de escopo onde a variavel criada dentro 
       de um if, for, while pode ser acessado fora deles
    */
}

//imprimeIdadeVar();


//usando let
function imprimeIdadeLet(){
    for(let idade = 30; idade <= 100; idade++) {
        console.log(`idade do arthur ${idade}`);
    }
    //Apresenta erro pois a variavel foi criada dentro do for e n deve 
    //ser acessada fora dele.
    //console.log(`idade do arthur ${idade}`);

    if(true){
        let nome ='arthur';
    }
    //diferente da var agora usando let nome nao aparece fora do if pois 
    //foi criada dentro dele,
    //ela NÃO vaza do if causando um comportamento previsivel

    console.log(`Fora if ${nome}`);
    console.log(`fora do for ${idade}`);
    /*
       o var tem um problema de escopo onde a variavel criada dentro 
       de um if, for, while pode ser acessado fora deles.
    
       let corrige esse erro.
       let n temo problema de escopo
    */
}

//imprimeIdadeLet();

//usando const
function imprimeIdadeConst(){
    for(const idade = 30; idade <= 100; idade++) {
        console.log(`idade do arthur ${idade}`);
    }
    //Apresenta erro pois a constant foi NÃO pode ter seu valor alterado 
    //Ela tbm n temproblrma de escopo com a var
    //console.log(`idade do arthur ${idade}`);

    if(true){
        const nome ='arthur';
    }
    //diferente da var agora usando const nome nao aparece fora do if pois 
    //foi criada dentro dele, poremn pode ter seu valor alterado pois é uma constante
    //ela NÃO vaza do if causando um comportamento previsivel

    console.log(`Fora if ${nome}`);
    console.log(`fora do for ${idade}`);
    /*
       VAR
       o var tem um problema de escopo onde a variavel criada dentro 
       de um if, for, while pode ser acessado fora deles.
    
       LET
       let corrige esse erro.
       let n temo problema de escopo

       CONST
       constantes NÃO podem ter seu valor alterado

    */
}
//imprimeIdadeConst();

//Criando objetos JSON com const 
const pessoa = {
    nome: 'arthur',
    idade: 30

};
/*
    //este codigo rega erro pois a constante n pode ser alterada
    pessoa = {
        nome: 'arthur',
        idade: 31  
    };
*/

//porem pode ser alterado o valor dos seus atributos
pessoa.idade = 31;//altera o valor do atributo do objeto
console.log('idade do marco', pessoa.idade);//imprime