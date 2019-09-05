/* jshint esversion:6 */
/*executando acada 5segundo */
/*
for(let i = 0; i < 100; i++){
    console.log(i);
}

setTimeout(() => {//depois que termina espera 1 segundo e executa
    console.log("terminou");
},10 * 1000);//1000 milisegundos * 10 = 10segundos
*/

var relogio = setInterval(() => {
    console.log(new Date());
}, 1 * 1000);


setTimeout(()=> clearInterval(relogio), 10* 1000);
console.log("oi");


