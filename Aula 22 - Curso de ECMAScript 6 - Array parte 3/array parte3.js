/*jshint esversion: 6 */

let nomes =["pedro" ,"maria","João"];
let idades=[12,15,14,18,16];


/*
arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
callback
Função para executar em cada elemento, recebendo três argumentos:

currentValue
O valor atual do elemento sendo processado no array.

index Optional
O índice do elemento atual sendo processado no array.

array Optional
O array que forEach() está sendo aplicado.

thisArg Optional
Opcional. Valor a ser usado como this quando executar callback.

nomes.forEach(function(v,i){
    console.log(i,v);
});

idades.forEach(//for para array
    function(v,i){
        console.log(i,v);
    }
);
*/

//every temque dar tudo verdadeiro no array pra retornar verdadeiro
/*
function isBigEnough(element, index, array) {
    return element >= 10;
  }
  [12, 5, 8, 130, 44].every(isBigEnough);   // false
  [12, 54, 18, 130, 44].every(isBigEnough); // true
//O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida.


arr.every(callback[, thisArg])

callback
Função que testa cada elemento, recebe três parametros:

currentValue (obrigatório)
O elemento atual sendo processado na array. 

index (opcional)
O índice do elemento atual sendo processado na array.

array (opcional)
O array de origem.

thisArg
Opcional. Valor a ser usado como this quando o callback é executado.

Valor de retorno
true se a função de callback retorna um valor truthy para cada um dos elementos do array; caso contrário, false.
*/
//some 1 deu verdadeiro no array retorna verdadeiro
var t = idades.some((v,i)=>{
    return v<12;
});
/*
var n = idades.filter(function(v,i,idades){
    return v < 18;
});

console.log(n);
/*

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
*/
