/*var nomes = ["arth","leti","rita","cido","mayz"];
console.log(
    nomes.join(" "),//separa por " "
    nomes.join(" _ "),//separa por " _ "
    nomes.join(", "),//separa por ", "
    nomes.join(" - ")//separa por " - "
);

console.log(
    nomes.indexOf('leti'),
    nomes.slice(1,3),//pega do numeor0 um ate o 3
    nomes.slice(-2),//pega do numeor0 um ate o 3

    nomes.shift(),
    nomes.unshift(),
    nomes.pop()


   


);
*/
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
var myFish = ["angel", "clown", "mandarin", "surgeon"];

//remove 0 elementos a partir do índice 2, e insere "drum"
var removed = myFish.splice(2, 0, "drum");
//myFish é ["angel", "clown", "drum", "mandarin", "surgeon"]
//removed é [], nenhum elemento removido
console.log(myFish);




//remove 1 elemento do índice 3
removed = myFish.splice(3, 1);
//myFish é ["angel", "clown", "drum", "surgeon"]
//removed é ["mandarim"]
console.log(myFish);



//remove 1 elemento a partir do índice 2, e insere "trumpet"
removed = myFish.splice(2, 1, "trumpet");
//myFish é ["angel", "clown", "trumpet", "surgeon"]
//removed é ["drum"]
console.log(myFish);



//remove 2 elementos a partir do índice 0, e insere "parrot", "anemone" e "blue"
removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
//myFish é ["parrot", "anemone", "blue", "trumpet", "surgeon"]
//removed é ["angel", "clown"]
console.log(myFish);



//remove 2 elementos a partir do indice 3
removed = myFish.splice(3, Number.MAX_VALUE);
//myFish é ["parrot", "anemone", "blue"]
//removed é ["trumpet", "surgeon"]
console.log(myFish);


myFish.toString();