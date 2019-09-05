/* jshint esversion: 6*/
//mapa parece um objeto JSON
/*
Mapa
O mapa é basicamente uma coleção de pares de chave / valor. É semelhante ao Dicionário em C #, Mapa em Java e Hash em Ruby.

O mapa também possui uma propriedade chamada size, que fornece informações sobre várias chaves / valores dentro da coleção.

Os seguintes métodos estão presentes em uma instância do mapa :

clear () - Exclui todos os elementos do mapa
delete (key) - exclui um elemento do mapa
forEach - É como o loop forEach clássico de uma matriz
get (key) - Obtém o elemento para a chave especificada
has (key) - Retorna true se a coleção contiver um elemento que possui essa chave
keys () - Retorna todas as chaves da coleção Map
set (chave, valor) - Adiciona um novo elemento ao mapa
values ​​() - Retorna todos os valores da coleção Map
toString () - Imprime “[conjunto de objetos]”
Aqui está um exemplo do novo objeto Map sendo instanciado:

vamos map =  new  Map ([[ ' name ' , ' CodingBlast ' ], [ ' points ' , 33 ], [ true , 55 ], [ ' true ' , 44 ]])

para ( deixe [chave, valor] do  mapa . entradas ()) {
  console . log ( ' chave é '  + tecla +  ' , o valor é '  + valor);
}

*/
var map = new Map([
    ['nome', 'arthur'],
    ['idade', 17],
    ['sexo', 'm']

]);

console.log(map); 
map.forEach((v,k) => {
    console.log(k,v);
});

/*
var map = new Map();

map.set("nome","Pedro");
map.set("idade",22);
map.set("sexo", "m");


console.log(map.get("sexo"));
map.delete("sexo");//deleta a chave sexo
console.log(map.has("sexo"));
map.clear();//apaga tudo todas as chaves
console.log(map);

map.forEach((v,k,map)=>{ //v = valor da chave | k= chave | map = mapa
    console.log(k,v);
});

for (let it of map.entries()) {
    console.log(it.join(": "));//junta as iinfos com ": "
}

console.log(map.keys(),map.values());

console.log(map.get("idade"));//pega a idade
console.log(map.clear("idade"));//limpa a idade
console.log(map.delete("idade"));//deleta a idade
console.log(map.entries("idade"));//cria um intereitor faz o map virar vetor
console.log(map.has("idade"));//verifica se tem a chave "idade"//retorna true ou false
console.log(map.size("idade"));//tipo o length
console.log(map.values());//pega os valores
*/

