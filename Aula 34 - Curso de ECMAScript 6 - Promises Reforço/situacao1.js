function sucessoCallBack(result) {
    console.log("Sucesso: " + result);
}
function erroCallBack(error) {
    console.log("ERRO: " +error);
}

fazAlgumaCoisa(sucessoCallBack,erroCallBack);

//pode ser melhor escrita assim
const promise = fazAlgumaCoisa();
promise.then(sucessoCallBack,erroCallBack);

//ou
fazAlgumaCoisa().then(sucessoCallBack,erroCallBack);