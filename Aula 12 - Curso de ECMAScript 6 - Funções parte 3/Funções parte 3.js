//https://medium.com/code-prestige/as-funcionalidades-mais-legais-do-es6-atrav%C3%A9s-de-exemplos-983a330ca314
//funçoes geradoras
/*
//function geradora 
// tem o * exemplo (funtion*)
function* arcoiris() {
    yield "azul";
    yield "amarela";
    yield "vermelho";
}
for (const iterator of arcoiris()) {
    console.log(iterator);
}
console.log(arcoiris());

*/

function* perguntas() {
    const nome = yield "Qual seu nome";
    const idade = yield "Qual sua idade";
    return `Nome: ${nome}, idade${idade}`;
}

const iterator = perguntas();
console.log(iterator.next());//chama a funçao
console.log(iterator.next('Arthur'));//atribui a string a const nome
console.log(iterator.next(17));//atribui o numero a const idade

/*
A declaração function* (palavra chave function seguida de um asterisco)
define um função geradora (generator function), que retorna um objeto
Generator.
Exemplo:
    function* generator(i) {
    yield i;
    yield i + 10;
    }

    var gen = generator(10);

    console.log(gen.next().value);
    // expected output: 10

    console.log(gen.next().value);
    // expected output: 20

Você também pode definir funções geradoras usando o construtor
GeneratorFunction ou a sintaxe da expressão de uma função. 




Descrição
    Geradores são funções cuja execução pode ser interrompida e
    posteriormente reconduzida.
    Seus contextos (de associações de variáveis) ficarão salvos 
    entre cada recondução.

    Geradores em JavaScript -- especialmente quando combinados com Promises
    -- são uma ferramenta muito poderosa para programação assíncrona,
    or mitigarem -- se não eliminarem -- problemas com callbacks, como o
    Callback Hell e Inversão de Controle. Funções async são fundamentadas
    nisso.

    Chamar uma função geradora não executa seu conteúdo imediatamente;
    ao invés disso um objeto iterator é retornado. Quando o método next()
    do objeto iterator é chamado, o conteúdo da função do gerador é
    executado até a primeira expressão yield, que especifica o valor 
    a ser devolvido do iterator ou com yield* que delega para outra 
    função geradora.

    O método next() retorna um objeto com uma propriedade value contendo
    o valor retornado e a propriedade boolean: done indicando se o
    gerador produziu seu último valor.

    Chamar o método next() com um argumento resumirá a execução da 
    função geradora, substituindo a expressão yield onde a execução 
    foi pausada com o argumento de next().

    Uma expressão return em um gerador, quando executada, fará com
    que o gerador termine (isto é, a propriedade done do objeto 
    retornado será atribuído com o valor true).

    Se um valor foi retornado, este será usado como propriedade value
    do objeto retornado pelo gerador. Semelhantemente a uma expressão
    return, um erro lançado dentro do gerador o terminará -- a não ser
    que tratado no corpo do gerador.

    Quando um gerador estiver terminado, chamadas next subsequentes
    não executarão nenhum código do gerador,retornarão simplesmente
    um objeto da seguinte: forma: {value: undefined, done: true}.

Mais informaçoes:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function*
*/
