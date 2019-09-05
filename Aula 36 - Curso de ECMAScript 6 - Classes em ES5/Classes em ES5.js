/* jshint esversion: 6*/
//classe em ES5
//constructor
var Pessoa =function (nome, idade, sexo, altura) {
    //atributo privado nao pode ter os nome iguais
    var tall = altura;

    //atributos publicos
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    
    //setters
    this.setNome = function (nome) {
        this.nome = nome;
    };
    this.setIdade = idade => this.idade = idade;
    this.setSexo = sexo => this.sexo = sexo;
    //set privado
    this.setAltura = altura => tall = altura;

    
    //getters
    this.getNome = () => this.nome;
    this.getIdade = () => this.idade;
    this.getSexo = () => this.sexo;
    //get privado
    this.getAltura = () => tall;
    
    //metodospublicos
    this.mostraPessoa = ()=>{
        return `${this.nome},${this.idade},${this.sexo}, ${getCalcAltura()}`;
    };
    //metodosprivados
    function getCalcAltura() {

        return tall * 5;
    }

};

//var p = new Pessoa("Maria", 18, "F");
var p = new Pessoa("#");
p.setNome("Leticia");
p.setIdade(17);
p.setSexo("F");
console.log(p.mostraPessoa());
console.log(p.getNome(),p.getSexo(),p.getIdade());

p.setAltura(2);
console.log(p.mostraPessoa());
console.log(p.getAltura());//pega a altura que foi ddefinida masnaopega a conta pois ela esta em um metodo privado

