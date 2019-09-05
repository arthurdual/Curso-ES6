
/*jshint esversion: 6 */
//criandomodulos
export const PI = Math.PI;
export function soma(...params){
    let s =0;
    for (let i = 0; i < params.length; i++) {
        s+= params[1];
   
    }
    return s;
}
export function subtraçao(...params){
    let s =0;
for (let i = 0; i < params.length; i++) {
    s-= params[1];

}
return s;
}