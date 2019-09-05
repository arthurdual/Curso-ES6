/*jshint esversion:6 */

var b = 0b010;//representação do numero em binario tem que começar com 0b
var o = 0o0011;//reprsesentação do numero em octal tem que começar com 0o
var h = 0xff00aa;//representação do numero em hexadecimal tem que começar com 0x

console.log(
    b,
    o,
    h
);

var numero = 1223;
console.log(
    //convertendo o numero 1223 nas base 2, 8, 10, 16
    numero.toString(2),//base 2 binario
    numero.toString(8),//base 8 octal
    numero.toString(10),//base 10 decimal
    numero.toString(16)//base 16 hexadecimal

);
