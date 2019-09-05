/* jshint esversion: 6*/
//com números

let x = 1000;
let y = 5;

console.log(x);
x += y;//x = x + y

console.log(x);
x -= y;//x = x - y

console.log(x);
x *= y;//x = x * y

console.log(x);
x /= y;//x = x / y

//com string
let msg;
let nome = 'arthur';

msg = "Olá" + " Mundo!";
console.log(msg);

msg = "Olá " + nome + "!";
console.log(msg);

msg = `Olá ${nome}`;
console.log(msg);


console.log(typeof(msg));//mostra o tipo primitivo  davariavel msg