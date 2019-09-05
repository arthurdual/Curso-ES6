/* jshint esversion: 6 */
//WHILE
let contador = 11;

while(contador <= 10){
    console.log(`contador: ${contador}`);
    //contador = contador + 1
    contador++;
}

//WHILE com If
let contador = 0;

while(contador <= 10){
    console.log(`contador: ${contador}`);
    //contador = contador + 1
    contador++;
    if(contador == 2){//se contador forigual a 2 de break
        break;//o break encerra o laço (while)
    }
    else{//senao
        continue;// continua o laço
    }
}

//DO WHILE
//Executa no minimo 1 vez
let contador = 11;

do{
    console.log(`contador: ${contador}`);
    //contador = contador + 1
    contador++;
}while(contador <= 10);