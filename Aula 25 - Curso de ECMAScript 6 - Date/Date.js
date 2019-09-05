/* jshint esversion: 6*/
var data1 = new Date();//data atual
var data2 = new Date(2018, 6, 28);//data
var data3 = new Date(2018, 6, 28, 12, 46, 5);//data e hora
var data4 = new Date(2015,12,25,25,55,25,2);
//var data4 = new Date(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number);
/*
console.log(data1.getDate());//pega dia da semana
console.log(data1.getDay());
console.log(data1.getFullYear());
console.log(data1.getHours());
console.log(data1.getMonth());
console.log(data1.getSeconds());
console.log(data1.getTime());
console.log(data1.getTimezoneOffset());
console.log(data1.getUTCFullYear());
*/

//console.log(data1.toDateString(),data1.toLocaleDateString(), data1.toLocaleTimeString());
//pega data em texto  | pega data local | pega data e hora local

console.log(data1);
console.log(data2);
console.log(data3);
console.log(data4);


/*manipulando data */

data1.setDate(data1.getDate() + 7);//add mais 7 em dias
data1.setHours(data1.getHours() + 5);
console.log(data1.toISOString());

