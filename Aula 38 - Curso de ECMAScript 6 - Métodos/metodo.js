// metodo ES6

class Calculadora {
    //ponteiro
    getCalculadora(){
        return this;
    }
    /**
     * Faz somas 
     * para ver esses comentarios coloque o mouse sobre o metodo soma
     * @param  {Number} params Numeros inteiro
     */
    //metodo pertence ao objeto 
    soma(...params){
        let s = 0;
        for (let i = 0; i < params.length; i++) {
            s += params[i];            
        }
        return s;
    }
    //metodo estatico pertence a classe // calculadora.getPI();
    static getPI(){
        return Math.PI;
    }
}
const c = new Calculadora();
console.log(c.soma(1,28,9));
console.log(Calculadora.getPI());//metodo estatico deve ser chamado pela classe


/*
class Animal {
    //metodo
    andar(){
        console.log("metodo andar/ metodo é um comportamento da classe\nNo caso, um dos comportamentos de animal é andar");
        return "deu um passo";
    }
}

let a = new Animal();

console.log(a.andar());
*/