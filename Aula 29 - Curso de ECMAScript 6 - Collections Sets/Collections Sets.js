//https://codingblast.com/javascript-set-map/
/*Conjunto é basicamente uma coleção de valores exclusivos que podem ser de qualquer tipo . Isso significa literalmente que você pode colocar qualquer valor dentro do conjunto e sim , você pode misturar tipos dentro do conjunto, assim como com matrizes JavaScript regulares. Não vejo isso muito útil, mas você pode fazê-lo.

Essa coleção é semelhante ao HashSet no mundo C # e Set / HashSet em Java.

Os documentos oficiais citam a seguinte sintaxe:

new Set([iterable]);

iterável
Se um objeto iterável for passado, todos os seus elementos serão adicionados ao novo conjunto . Se você não especificar este parâmetro ou seu valor for nulo , o novo conjunto estará vazio.
Isso parece bem direto. Em palavras curtas e simplificadas, iterável é algo pelo qual podemos iterar, e geralmente é uma sequência ou coleção de elementos. Se você quiser ler mais sobre iteradores e iterables, confira este post - Iteradores JavaScript .

Vamos ver um exemplo de Set:

deixe set =  new  Set ([ 3 , 5 , true , ' Esta é uma string, obviamente. ' ]);

for ( deixe o item do  conjunto . valores ()) {
  console . log (item); 
  Como o próprio Set é iterável, podemos usar a instrução for..of diretamente contra ele:

deixe set =  new  Set ([ 3 , 5 , true , ' Esta é uma string, obviamente. ' ]);

para ( deixe o item do conjunto) {
  console . log (item);
}
Set possui uma propriedade muito útil chamada  size,  que nos fornece informações sobre vários valores dentro da coleção.
**********************************************************************
Os métodos mais importantes presentes em uma instância do conjunto :

add (elemento) - adiciona um novo elemento ao conjunto
clear () - Exclui todos os elementos do conjunto
delete (elemento) - exclui um elemento do conjunto
forEach - É como o loop forEach clássico de uma matriz
has (value) - Retorna true se a coleção contiver um determinado elemento.
toString () - Imprime “[conjunto de objetos]”
values ​​() - Retorna todos os valores da coleção Set
keys () - O mesmo que values ​​() realmente. É um alias para o método values ​​() . A única razão que existe é ter uma interface uniforme entre os novos tipos de coleção em JavaScript.
 ************************************************ 

forEach on Set
Sintaxe:

mySetInstance.forEach(function callback(value1, value2, Set) { 
 // some code that will be run for every value inside ofSet
}[, thisArg])*/
var s  =new Set();
s.add('1');
s.add('2');
s.add(true);

/*
console.log(s);
console.log(s.has("2"));
console.log(s.keys(), s.values());

s.delete('2');
console.log(s);
s.clear();
console.log(s);
*/

s.forEach((keys,values)=>{
    console.log(values,keys);
});

 