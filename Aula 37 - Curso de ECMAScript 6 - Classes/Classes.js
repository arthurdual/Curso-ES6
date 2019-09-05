// Classes ES6

//forma nomeada
var triangulo = class triangulo {
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }
};

let t = new triangulo(2,5);
console.log(t.altura,t.base);

/*
//forma sem nome
var triangulo = class{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }
};
let t = new triangulo(2,5);
console.log(t.altura,t.base);
*/
/*
//forma padro classico
class triagulo {
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }
}

let t = new triagulo(2,5);

console.log(t.altura,t.base);

*/