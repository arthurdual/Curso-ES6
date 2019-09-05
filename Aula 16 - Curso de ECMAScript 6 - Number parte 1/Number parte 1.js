var x =10;
var y = new Number('5');
console.log('x+y');

console.log(
    Number.MAX_VALUE,
    Number.MIN_SAFE_INTEGER,
    Number.MIN_VALUE,
    Number.MIN_SAFE_INTEGER,
    Number.POSITIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    Number.NaN,
    Number.parseFloat(5),
    Number.parseInt(5.5),
    isNaN(5.6),
    isFinite(5555),
    x.toExponential(10),//aredonda depois de 2 numero depois da virgula / 1.559 vira 1.56 
    x.toPrecision(2),//corta o num 2 depois da virgula 1.5555 vira 1.55




);


/*
Number.isNaN() 
Determina se o valor passado é NaN.
Number.isFinite() 
Determina se o tipo e o valor passado é um número finito.
Number.isInteger() 
Determina se o tipo do valor passado é  inteiro.
Number.parseFloat() 
O valor é o mesmo que parseFloat do objeto global.


Number.prototype
Permite a adição de propriedades a um objeto Number.

Toda instância Number herdam de Number.prototype. O objeto 'prototype' do construtor Number pode ser modificado para afetar todas as instâncias Number.

Métodos

Number.prototype.toExponential()
Returns a string representing the number in exponential notation.

Number.prototype.toFixed()
Returns a string representing the number in fixed-point notation.

Number.prototype.toLocaleString()
Returns a string with a language sensitive representation of this number.
Overrides the Object.prototype.toLocaleString() method.

Number.prototype.toPrecision()
Returns a string representing the number to a specified precision in fixed-point or exponential notation.

Number.prototype.toSource() 
Returns an object literal representing the specified Number object; you can use this value to create a new object. Overrides the Object.prototype.toSource() method.

Number.prototype.toString()
Returns a string representing the specified object in the specified radix (base). Overrides the Object.prototype.toString() method.

Number.prototype.valueOf()
Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.


 Number para converter um objeto Date
O exemplo a seguir converte o objeto Date para um valor numérico usando Number como uma função:

var d = new Date("December 17, 1995 03:24:00");
print(Number(d));
Isto resulta em "819199440000".

Converte 'string' numérica em númerosSeção
Number('123')     // 123
Number('12.3')    // 12.3
Number('')        // 0
Number('0x11')    // 17
Number('0b11')    // 3
Number('0o11')    // 9
Number('foo')     // NaN
Number('100a')    // NaN
*/