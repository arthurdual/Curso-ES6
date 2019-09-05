/*jshint esversion: 6 */
//criandomodulos
"use strict";
exports.soma = soma, exports.subtraçao = subtraçao;
const PI = Math.PI;
function soma(...params){
    let s =0;
    for (let i = 0; i < params.length; i++) {
        s+= params[1];
   
    }
    return s;
}
function subtraçao(...params){
    let s =0;
for (let i = 0; i < params.length; i++) {
    s-= params[1];

}
return s;
}
exports.PI = PI;

//# sourceMappingURL=calculadora.js.map