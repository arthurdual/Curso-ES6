/* jshint esversion: 6 */

var pessoa ={
    nome: "teste",
    idade:2,
    sexo: "M",
    showPessoa:() =>{
        console.log(`${pessoa.nome}, ${pessoa.idade}`);
    },
    soma: (x,y) =>{
        return(x+y);
    },
    mat:{
        primeiro: "1",
        segundo: "2",
    }
};

//console.log(pessoa.mat.primeiro);//mostra 1
//console.log(Object.keys(pessoa));//mostra o que tem em pessoa

/*
const p = Object.freeze(pessoa);//tranforma o objeto em um tipo de constante deixando ele inalteravel //congela nem o valor pode ser mudado
console.log(p);
console.log(Object.isFrozen(p));//retorna true pois p ta congelado
console.log(Object.isFrozen(pessoa));
p.nome = "Maria";
delete p.sexo;
console.log(p);
*/

let texto = JSON.stringify(pessoa);
//JSON.stringify pega um objeo json e tranforma em texto
//enviado { nome: 'teste', idade: 12, sexo: 'M' }
//retorna {"nome": "teste", "idade":12,"sexo":"M"} 

console.log(texto);

var p = JSON.parse('{"nome": "teste", "idade":12,"sexo":"M"}');
//JSON.parse pega um texto e tranforma em objeto JSON
//enviado {"nome": "teste", "idade":12,"sexo":"M"} 
//retorna { nome: 'teste', idade: 12, sexo: 'M' }
//utilizado em logins automaticos com localstore e getcookie
console.log(p);
console.log(p.nome);//.nome n aparece no intelliSense pq foi criado agr(nao existia antes)