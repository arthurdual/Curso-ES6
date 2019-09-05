//funçoes novas

let msg = "ola mundo";
console.log(
    msg.indexOf('o'),//retorna posição do 'o'  em msg //começa pelo começo da frase
    msg.indexOf('la'),//retorna posição do 'la' em msg
    msg.lastIndexOf('o'),//retorna posição do 'o'  em msg //começa pelo começo da frase
    //contagem começa do 0
    //se retornar -1 o valor n foi encontradona frase
    msg.search("a"),
    msg.search("/do/")
 
);


/*
.repeat()
o método .repeat — como o próprio nome já deixa bem claro — faz a repetição da string a quantidade de vezes informada:
console.log('JavaScript Level God '.repeat(10));


.startsWith()
por exemplo digamos que queremos saber se uma determinada string se inicia com um determinado conjunto de caracteres, podemos proceder adicionando
.startsWith(‘caracteres_que_eu_quero_saber_se_a_string_se_inicia’, 4)//a busca inicia apartir do 4 caracter


.includes()
Se precisarmos saber se a string contém uma determinada cadeia de caracteres, usamos o .includes ( que retorna true ou false):
let text = 'JavaScript is cool ';
 console.log(text.includes('is'));


.search()
O método search é exatamente igual ao método indexOf, retorna a primeira ocorrência de um determinado pedaço de em uma string.
var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.search("Mundo");//Retorna 4


.slice()
O método slice extrai uma parte de uma string e retorna a parte extraída em uma nova string.
O método tem dois parâmetros: o índice inicial (posição), e o índice final (posição).
var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.slice(4,13);//Retorna Mundo Olá


.substring()
É similar ao slice, porem não aceita números negativos.
var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.substring(10, 15);//Retorna Olá M



.substr()
Também é similar ao slice, com uma diferença que o segundo parâmetro é o tamanho do corte e não até onde contar.
var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.substr(4, 7);//Retorna Mundo O

.split()
É possível converter uma string em array usando o método split.

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var arr = str.split(" ")
for (i in arr) {
    console.log(arr[i])
};

*/