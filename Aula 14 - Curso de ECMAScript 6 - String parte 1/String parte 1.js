function percorrendoStrings() {
    var msg = "olá mundo";

    //percorrendo strings
    console.log(msg.charAt(0));//pega a primeira letra da string
    console.log(msg.charCodeAt(0));//pega a primeira letra da string e mostra o codigo dela na tabela ASCII
    console.log(msg[0]);//interpreta a string como um array e pela a letra da primeira posição
    
    console.log(msg.substring(0, 7));//O método substring() retorna o trecho de uma string de acordo com os números informados por parâmetro.
    console.log(msg.substring(3));//pega do terceiro caractere ate o ultimo
    
    console.log(msg.slice(0, 6))//começa do final da frase
    console.log(msg.slice(-5, -1))//começa do final da frase
    console.log(msg.slice(-5))//pega os 5 ultimos caracteres


}
//percorrendoStrings();


//juntando strings //concatenando strings
function concatenandoStrings() {
    let msg1 = 'Olá';
    let msg2 = 'mundo';

    console.log(msg1 + " " + msg2);
    console.log(`${msg1} ${msg2}`);
    console.log(msg1.concat(' ', msg2));
}
//concatenandoStrings();


function substituindoStrings() {
    let msg1 = 'olá mundo';
    
    //substituindo Strings com replace
    console.log(msg1.replace('olá', 'Hello').replace('mundo','Word'));
    
    //substituindo Strings com regEx (expressão regular)
    console.log(msg1.replace(/o/g, 'B'))//troca todos os 'o' por 'B' 
}

//substituindoStrings();


function dividindoStrings() {
    let msg1 = 'olá mundo';
    
    //substituindo Strings com replace
    console.log(msg1.replace('olá', 'Hello').replace('mundo','Word'));
    
    //substituindo Strings com regEx (expressão regular)
    console.log(msg1.replace(/o/g, 'B'))//troca todos os 'o' por 'B' 
}

//dividindoStrings();


function quebrandoStrings() {
    let msg1 = 'olá mundo';
    let msg2 = 'olá, mundo';
    let msg3 = 'olá-mundo';
    
    //quebrando Strings com slpit
    console.log(msg1.split(''));//quebra a string a cada letra
    console.log(msg1.split(' '));//quebra a string onde tiver espaço
    console.log(msg2.split(','));//quebra a string onde tiver ,
    console.log(msg3.split('-'));//quebra a string onde tiver -
    
    
}
//quebrandoStrings();



/*
Métodos não relacionados ao HTML
String.prototype.charAt()
Retorna o caractere (exatamente uma unidade de código UTF-16)
no índice especificado.

String.prototype.charCodeAt()
Retorna um número que é o valor da unidade de código UTF-16 em
dado índice.

String.prototype.concat()
Combina o texto de duas strings e retorna uma nova string.

String.prototype.includes()
Determina se uma string deve ser encontrada dentro de outra string.

 String.prototype.endsWith()
Determina se uma string termina com os caracteres de outra string.

String.prototype.indexOf()
Retorna o índice dentro do objeto String chamado da primeira ocorrência
do valor especificado, ou -1 se não encontrado.

String.prototype.lastIndexOf()
Retorna o índice dentro do objeto String chamado da última ocorrência
do valor especificado, ou -1 se não encontrado.

String.prototype.match()
Usado para combinar uma expressão regular com uma string.

String.prototype.normalize()
Retorna o Formulário de Normalização Unicode do valor string chamado.

String.prototype.padEnd()
Empacota a string atual desde o final com uma string dada para criar uma
nova string de um dado comprimento.

String.prototype.padStart()
Empacota a string atual desde o início com uma string dada para criar
uma nova string de um dado comprimento.

String.prototype.repeat()
Retorna uma string consistindo elementos do objeto repetido pelas vezes
definidas.

String.prototype.replace()
Usado para encontrar uma combinação entre uma expressão regular e uma
string, e para substituir uma substring combinada com uma nova substring.

String.prototype.search()
Executa a procura por uma combinação entre uma expressão regular e uma
string especificada.

String.prototype.slice()
Extrai uma seção de uma string e retorna uma nova string.

String.prototype.split()
Separa um objeto String em um array de strings separando a string em
substrings.

String.prototype.startsWith()
Determina se uma string começa com os caracteres de outra string.

String.prototype.substr()
Retorna os caracteres em uma string começando no local especificado
através do número especificado de caracteres.

String.prototype.substring()
Retorna os caracteres em uma string entre dois índices na string.

String.prototype.toLocaleLowerCase()
Os caracteres dentro de uma string são convertidos para letras
minúsculas enquanto respeita a localidade atual. Para a maioria das
línguas, irá retornar o mesmo que toLowerCase().

String.prototype.toLowerCase()
Retorna o valor da string de chamada convertido em minúsculas.

String.prototype.toSource() 
Retorna um objeto literal representando o objeto especificado; Você
pode usar esse valor para criar um novo objeto.
Substitui o metodo:Object.prototype.toSource()

String.prototype.toString()
Retorna uma string que representa o objeto especificado. 
Substitui o metodo:Object.prototype.toString()

String.prototype.toUpperCase()
Retorna o valor da string de chamada convertido em maiúscula.

String.prototype.trim()
Retira o espaço em branco desde o início e o fim da string. 
Parte do padrão ECMAScript 5.

String.prototype[@@iterator]()
Retorna um novo objeto  Iterator que repete sobre os pontos de código
de um valor String, retornando cada ponto de código como um valor String.

*/


