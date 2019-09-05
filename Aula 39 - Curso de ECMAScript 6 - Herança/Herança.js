let Animal = {
    comunicar(){
        console.log(this.nome+ "faz barulho");
    }
};
class Cachorro  {
    constructor(nome){
        this.nome = nome;
    }
}
//um Objeto setar a propriedade de uma class (Um tipo de herança)
Object.setPrototypeOf(Cachorro.prototype, Animal);

var c = new Cachorro("Dog");
c.comunicar();


/*
///herança
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    mostraPessoa(){
        return `${this.nome},${this.idade}`;
    }
}
class Aluno extends Pessoa{
    constructor(nome,idade,periodoEscolar){
        super(nome,idade);//pega variaveis do construtor pai (Pessoa)
        this.periodoEscolar = periodoEscolar;
    }
    mostraDadosAluno(){
        return super.mostraPessoa() + `, ${this.periodoEscolar}`;//concatena o return do metodo do mostraPessoa com `, ${this.periodoEscolar}`
        
    }
    
}
var p = new Pessoa("MARIA", 12);
var a = new Aluno("pedro", 13, 6);

console.log(p.mostraPessoa());
console.log(a.mostraPessoa());
console.log(a.mostraDadosAluno());
*/

/*
class Animal {
    constructor(nome){
        this.nome = nome;
    }
   //comunicacao(){
   //     console.log(this.nome+ "faz barulho");
   // }
}
class Cachorro extends Animal {//herda comunicação de animal e metodo construtor
    //latir(){
    //    return "AU AU AU";
    //}
    comunicacao(){
        super.comunicacao();
        return this.nome+ "AU AU AUA UA UA UA AUA";
    }
}
class Gato extends Animal {
    //mia(){
    //    return "miauuuuuuuu";
    //}
    comunicacao(){
        super.comunicacao();
        return this.nome+ "MIAUUUUUUUUUU";
    }
}

var a = new Animal("Ser humano");
var c = new Cachorro("DOGAO");
var g = new Gato("TIGRÃO");

console.log(a.comunicacao());
console.log(c.comunicacao());
console.log(g.comunicacao());
*/
