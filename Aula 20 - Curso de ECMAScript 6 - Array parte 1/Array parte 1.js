//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
//Criando um Array

var frutas = ['Maçã', 'Banana'];

console.log(frutas.length);
// 2


//Acessar um item (index) do Array

var primeiro = frutas[0];
// Maçã
var ultimo = frutas[frutas.length - 1];
// Banana


//Iterar um Array

frutas.forEach(function (item, indice, array) {
  console.log(item, indice);
});
// Maçã 0
// Banana 1
Adicionar um item ao final do Array

var adicionar = frutas.push('Laranja');
// ['Maçã', 'Banana', 'Laranja']
Remover um item do final do Array

var ultimo = frutas.pop(); // remove Laranja (do final)
// ['Maçã', 'Banana'];
Remover do início do Array

var primeiro = frutas.shift(); // remove Maçã do início
// ['Banana'];

//Adicionar ao início do Array

var adicionar = frutas.unshift('Morango') // adiciona ao início
// ['Morango', 'Banana'];
Procurar o índice de um item na Array

frutas.push('Manga');
// ['Morango', 'Banana', 'Manga']

var pos = frutas.indexOf('Banana');
// 1

//Remover um item pela posição do índice

var removedItem = frutas.splice(pos, 1); // é assim que se remove um item
// ['Morango', 'Manga']
Remover itens de uma posição de índice

var vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
console.log(vegetais); 
// ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']

var pos = 1, n = 2;

var itensRemovidos = vegetais.splice(pos, n); 
// Isso é como se faz para remover itens, n define o número de itens a se remover,
// a partir da posição (pos) em direção ao fim da array.

console.log(vegetais); 
// ['Repolho', 'Cenoura'] (o array original é alterado)

console.log(itensRemovidos); 
// ['Nabo', 'Rabanete']
Copiar um Array

var copiar = frutas.slice(); // é assim que se copia
// ['Morango', 'Manga']
 
/*
Sintaxe
[element0, element1, ..., elementN]
new Array(element0, element1, ..., elementN)
new Array(arrayLength)
element0, element1, ..., elementN
Um array JavaScript é inicializado com os elementos contém,  exceto no caso onde um único argumento é passado para o construtor do Array e esse argumento é um número (veja o parâmetro arrayLength abaixo).  Esse caso especial só se aplica para os arrays JavaScript criados com o construtor Array , e não para literais de array criados com a sintaxe de colchetes [].
arrayLength
Se o único argumento passado para o construtor do Array for um número inteiro entre 0 and 232-1 (inclusive), um novo array com o tamanho desse número é retornado. Se o argumento for qualquer outro número, uma exceção RangeError é lançada.
*/
/*
Propriedades
Array.length
Propriedade comprimento do construtor Array, cujo valor é 1.
get Array[@@species]
A função de construtor que é utilizada para criar objetos derivados.
Array.prototype
Permite a adição de propriedades para todos os objetos array.*/
/*


MétodosSeção
Array.from()
Cria uma nova instância de Array a partir de um objeto semelhante ou iterável.
Array.isArray()
Retorna true se a variável é um array e false caso contrário.
Array.of()
Cria uma nova instância de Array com um número variável de argumentos, independentemente do número ou tipo dos argumentos.
 
Instâncias de ArraySeção
Todas as instâncias de Array herdam de Array.prototype.  O protótipo do construtor Array pode ser modificado de forma a afetar todas as instâncias de Array.

PropriedadesSeção
Array.prototype.constructor
Specifies the function that creates an object's prototype.
Array.prototype.length
Reflects the number of elements in an array.
Array.prototype[@@unscopables]
A symbol containing property names to exclude from a with binding scope.
MétodosSeção
Métodos modificadores
These methods modify the array:

Array.prototype.copyWithin()
Copies a sequence of array elements within the array.
Array.prototype.fill()
Fills all the elements of an array from a start index to an end index with a static value.
Array.prototype.pop()
Removes the last element from an array and returns that element.
Array.prototype.push()
Adds one or more elements to the end of an array and returns the new length of the array.
Array.prototype.reverse()
Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.
Array.prototype.shift()
Removes the first element from an array and returns that element.
Array.prototype.sort()
Sorts the elements of an array in place and returns the array.
Array.prototype.splice()
Adds and/or removes elements from an array.
Array.prototype.unshift()
Adds one or more elements to the front of an array and returns the new length of the array.
Métodos de acesso
These methods do not modify the array and return some representation of the array.

Array.prototype.concat()
Returns a new array that is this array joined with other array(s) and/or value(s).
Array.prototype.includes()
Determines whether an array contains a certain element, returning true or false as appropriate.
Array.prototype.indexOf()
Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
Array.prototype.join()
Joins all elements of an array into a string.
Array.prototype.lastIndexOf()
Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
Array.prototype.slice()
Extracts a section of an array and returns a new array.
Array.prototype.toSource() 
Returns an array literal representing the specified array; you can use this value to create a new array. Overrides the Object.prototype.toSource() method.
Array.prototype.toString()
Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.
Array.prototype.toLocaleString()
Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method.
Métodos de iteração
Several methods take as arguments functions to be called back while processing the array. When these methods are called, the length of the array is sampled, and any element added beyond this length from within the callback is not visited. Other changes to the array (setting the value of or deleting an element) may affect the results of the operation if the method visits the changed element afterwards. While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code. If you must mutate the array, copy into a new array instead.

Array.prototype.entries()
Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
Array.prototype.every()
Returns true if every element in this array satisfies the provided testing function.
Array.prototype.filter()
Creates a new array with all of the elements of this array for which the provided filtering function returns true.
Array.prototype.find()
Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.
Array.prototype.findIndex()
Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.
Array.prototype.forEach()
Calls a function for each element in the array.
Array.prototype.keys()
Returns a new Array Iterator that contains the keys for each index in the array.
Array.prototype.map()
Creates a new array with the results of calling a provided function on every element in this array.
Array.prototype.reduce()
Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
Array.prototype.reduceRight()
Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
Array.prototype.some()
Returns true if at least one element in this array satisfies the provided testing function.
Array.prototype.values()
Returns a new Array Iterator object that contains the values for each index in the array.
Array.prototype[@@iterator]()
Returns a new Array Iterator object that contains the values for each index in the array.*/