//Funçoes normais (nomeadas)
function mostraMensagemComFunctionNomeada(x){
    console.log(x);
}
//mostraMensagemComFunctionNomeada("Olá mundo!")


//funçoes anonimas
var mostraMensagemComFunçaoAnonima = function (x) {
    console.log(x);
}
//mostraMensagemComFunçaoAnonima('Olá mundo')


//Arrow functions / funtions lambda
//arrow funtion serve pra diminuir o numero de functions
var mostraMensagemComArrowFunction = (x) => {
    console.log(x);
}
//mostraMensagemComArrowFunction('Olá mundo')

let mostraMensagemComArrowFunctionSimplificada = x => console.log(x);
//let mostraMensagemComArrowFunctionSimplificada = (x) => {console.log(x);}
//mostraMensagemComArrowFunctionSimplificada("Olá mundo");

//funçõse encapsuladas

(function (x, y) {
    console.log(x + y);
})(10, 5);

let resultSum = ((...params)=>{
    let s = 0;
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        s += element;
    }
    return(s);

})(10, 6)

console.log(resultSum);

//base

    //arrow function
    () => {

    }
    //arrow encapsulada
    (() => {

    })();
/*
Encapsulament é a técnica que faz com que detalhes internos
do funcionamento dos métodos de uma classe permaneçam ocultos
para os objetos. Por conta dessa técnica, o conhecimento a respeito
da implementação interna da classe é desnecessário do ponto de vista
do objeto, uma vez que isso passa a ser responsabilidade dos métodos
internos da classe.

Assim que uma classe é criada, seu código e seus dados,
os quais são chamados de membros da classe, são determinados.
Esses dados recebem o nome de variáveis membro ou variáveis de
instância. Já o código tem outra função de formar os métodos,
os quais também podem ser denominados como métodos membro.

Tendo em mente que os métodos e as variáveis de uma classe podem
ser definidos como públicos ou privados, temos a seguinte situação:

    Tudo o que o usuário externo precisa conhecer a respeito de 
    uma classe encontra-se em propriedades ou métodos declarados 
    como públicos (public).

    Somente os códigos membros da classe são capazes de acessar
    seus métodos e variáveis privados. Isso garante que não ocorrerão 
    ações inadequadas, mas exige que a interface pública seja planejada
    com cautela para que o funcionamento interno da classe não seja muito
    exposto.

Saiba mais: Encapsulamento, Polimorfismo, Herança em Java
https://www.devmedia.com.br/encapsulamento-polimorfismo-heranca-em-java/12991


Dito tudo isto, podemos concluir que a única forma de conhecer
ou alterar os atributos de um objeto é por meio de seus métodos.
Abaixo cito quatro vantagens do encapsulamento:

    O objeto é disponibilizado ao usuário com toda a sua funcionalidade,
    sem a necessidade de conhecermos seu funcionamento ou armazenamento
    interno;

    É possível modificar um objeto internamente, acrescentando métodos,
    sem que isto afete os outros componentes do sistema que utilizam o
    objeto modificado;

    O processo de desenvolvimento de sistemas é acelerado e simplificado,
    já que os usuários dos objetos não precisam necessariamente saber como
    eles são constituídos internamente;

    A implementação de um comportamento pode ser modificada radicalmente
    sem que haja impacto no resto do programa. Isto é possível porque o
    código que utiliza o objeto não depende da maneira que ele é 
    implementado.

https://www.devmedia.com.br/conceitos-encapsulamento-programacao-orientada-a-objetos/18702
*/