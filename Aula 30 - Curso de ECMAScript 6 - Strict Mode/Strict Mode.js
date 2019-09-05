//modo estrito
//programar certinho
/*A "use strict"diretiva era nova no ECMAScript versão 5.

Não é uma declaração, mas uma expressão literal, ignorada pelas versões anteriores do JavaScript.

O objetivo de "use strict"é indicar que o código deve ser executado no "modo estrito".

Com o modo estrito, você não pode, por exemplo, usar variáveis ​​não declaradas.

Todos os navegadores modernos suportam "use strict", exceto o Internet Explorer 9 e versões inferiores:
Declarando o modo estrito
O modo estrito é declarado adicionando "use strict"; para o início de um script ou função.

Declarado no início de um script, ele tem escopo global (todo o código no script será executado no modo estrito):

Exemplo
"use strict";
x = 3.14;       // This will cause an error because x is not declared
O "uso estrito"; Sintaxe
A sintaxe, para declarar o modo estrito, foi projetada para ser compatível com versões mais antigas do JavaScript.

Compilar um literal numérico (4 + 5;) ou um literal de cadeia de caracteres ("John Doe";) em um programa JavaScript não tem efeitos colaterais. Simplesmente compila para uma variável inexistente e morre.

Portanto, "use strict";só importa para novos compiladores que "entendam" o significado disso.

Por que modo estrito?
O modo estrito facilita a gravação de JavaScript "seguro".

O modo estrito altera a "sintaxe incorreta" anteriormente aceita em erros reais.

Como exemplo, no JavaScript normal, digitar incorretamente um nome de variável cria uma nova variável global. No modo estrito, isso gerará um erro, tornando impossível criar acidentalmente uma variável global.

Em JavaScript normal, um desenvolvedor não receberá nenhum feedback de erro ao atribuir valores a propriedades não graváveis.

No modo estrito, qualquer atribuição a uma propriedade não gravável, uma propriedade somente getter, uma propriedade inexistente, uma variável inexistente ou um objeto inexistente gerará um erro.
https://www.w3schools.com/js/js_strict.asp
*/
/* jshint esversion: 6 */
"use strict";
let x = 5;
let y =6;
let s =x+y;

console.log(s);

var pessoa = {
    nome:"arthur",
    idade: 22,
    sexo: "m"
};

console.log(pessoa);
delete pessoa.nome;
console.log(pessoa);

function Maior(i){
    "use strict";
    let t = i>= 10;
    return t;
}