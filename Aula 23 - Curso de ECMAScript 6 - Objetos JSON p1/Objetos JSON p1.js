/*jshint esversion: 6 */
//var p =Object();
var pessoa ={//prefedido pelo sistema
    "nome": 'Teste',
    idade: 12,
    sexo:'m'
};
//console.log(typeof p,typeof pessoa);
/*
pessoa.nome="arthur";
pessoa.idade =12;
pessoa.sexo ="m";*/
console.log(pessoa);
/*
var obj ={
    nome: "tetst",
    "1":"testamdo",
    sexo:true
};
console.log(obj.nome,obj[1],obj.sexo);
*/
var p = Object.assign({}, pessoa);//cria umclone de pessoa

delete pessoa.sexo;
console.log(pessoa);
console.log(p);

var {nome, idade,sexo} = pessoa;//faz o conteudo do objeto pessoa virar "variaveis"

console.log(nome,idade);




