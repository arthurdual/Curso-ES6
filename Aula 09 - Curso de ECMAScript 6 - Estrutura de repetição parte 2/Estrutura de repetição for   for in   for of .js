/*jshint esversion: 6 */
//for
function For() {
    let nomes = ['art','rita','may'];
    for (let i = 0; i < nomes.length; i++) {
        const element = nomes[i];
        console.log(i)
        console.log(nomes[i]);
        
    }
}

//For();
//for in 
// usado para objetos e arrays
function For_in() {
    let pessoa = {
        nome: 'arthur',
        idade: 12,
        sexo: "M"
    };

    for (const infos in pessoa) {
        console.log(`${infos}: ${pessoa[infos]}`);
    }
}
//For_in();

//for of
//usado para interators map e sets
function For_of() {7
    let map = new Map();
    map.set('a',1);
    map.set('b',2);
    map.set('c',3);

    for (let [key, value] of map) {
        console.log(key, value);
    }
}

For_of();