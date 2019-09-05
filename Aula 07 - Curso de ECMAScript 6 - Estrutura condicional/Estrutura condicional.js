/*jshint esversion: 6*/

//estrutura if else if e elsa
let num = 1;

if (num >= 5){//SE
    console.log('oii');
}
else if(num >= 2){//SE
    console.log('num >= 2');
}
else{//SENAO
    console.log('num < 2');
}

//estrutura swith case break
let fruta = 'maçã';

switch (fruta){
    case "maçã"://caso seja "maçã"
        console.log('macieira');
        break;
    case "banana"://caso seja "banana"
        console.log('bananeira');
        break;
    case "abacaxi"://caso seja "abacaxi"
        console.log('Abaxizeiro');
        break;
    default://caso n seja nenhuma das anteriores
        console.log('Frutra desconecida');
        break;//encerra

}