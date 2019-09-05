//functions

function soma1(x, y) {
    resp = x + y;
    console.log(resp);
}
//soma1(10,6);

function soma2(x, y) {
    resp = x + y;
    return(resp);
}
//soma2(10, 6)
//let result = soma2(5, 20);
//console.log(result);


//funçoes anonimas
//lambda functions
/*
//Funções nomeadas x funções anônimas

Todo mundo aqui, deve saber o que são funções nomeadas e
anônimas em JavaScript. Se não sabe, eis alguns exemplos:

// função nomeada
function common() {
    return true;
}
Acima vemos uma função nomeada e, a seguir, uma função anônima:

// função anônima
var anonymous = function() {
 return true;
}

Observando os dois códigos, vê-se pouca diferença, não é mesmo? 
Os dois quando executados retornam a mesma coisa (true), porém
são padrões sintáticos bem distintos.

No primeiro, temos uma função definida com o nome common, e é
através desse nome que será possível invocar essa função, desse jeito:

common();
// => true
No segundo, note que a função não possui um nome, então ela
precisou ser atribuída a variável anonymous para que pudesse
ser invocada. Neste caso a chamada seria idêntica ao exemplo
anterior:

anonymous();
// => true

Em linhas gerais, desculpe a ambiguidade, a função nomeada
chama-se assim porque tem um nome. A função anônima, por 
sua vez não possui um nome, então a única forma de utilizá-la
é atribuindo-a algo (uma variável, uma propriedade em um objeto, etc). 

 Mais informações:
//https://willianjusten.com.br/porque-eu-evito-funcoes-anonimas/
//https://blog.caelum.com.br/organize-seu-codigo-javascript-de-maneira-facil/
*/
function funcoes_anonimas() {

    let pessoa = {
        nome: 'arthur',
        idade: 12,
        sexo: "M",
        imc: function() {

            //metodo
            //Calcula imc

            /*********************************************************
              A função anônima, não possui um nome, então a única
              forma de utilizá-laé atribuindo-a algo (uma variável,
              uma propriedade em um objeto, etc).
            **********************************************************/
        }
    };

}