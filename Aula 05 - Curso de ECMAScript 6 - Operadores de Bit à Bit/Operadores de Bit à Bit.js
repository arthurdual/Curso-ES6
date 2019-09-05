/*jshint esversion: 6 */

//Operadores de Bit à Bit
//trabalha com numeros binarios
/*
    //link pramais informações
    https://imasters.com.br/desenvolvimento/conheca-os-operadores-bitwise-bit-bit
    
    Operadores bitwise são utilizados quando
    precisamos realizar operações em nível de bits
    com números inteiros, ou seja, trabalhar com sua
    representação binária.

    Caso ambos os operandos sejam strings,
    esses operadores irão trabalhar com os valores ASCII
    de seus caracteres.

    Operações Bitwise
    Operador & ( Bitwise AND )
    Operador | ( Bitwise OR )
    Operador ^ ( Bitwise XOR )
    Operador ~ ( Bitwise NOT )
    Bit Shift
    Operador >> ( Bitwise right shift )
    Operador << ( Bitwise left shift )

    Não confunda os operadores bitwise com operadores lógicos,
    algumas representações são parecidas, mas suas funcionalidades 
    são diferentes.

*/
let a = 2; //bit seria 10
let b = 3; //bit seria 11

console.log(a & b);
console.log(a | b);
console.log(a ^ b);
console.log(-b);
console.log(-a);
console.log(a << b);
console.log(a >> b);