
try {
    throw new ErrorMessage();
    //throw({errorName: "Erro Nome",mensagem: "Erro por usar try catch"});
} catch (error) {
    console.log(e.errorName);
    console.log(e.mensagem);
}

function ErrorMessage(params) {
    this.errorName = "texto";
    this.mensagem = "texto nao atribuido";
}



/*
try {
    //executa
    let x = 5;
    let y = 0;
    
    if (y == 0) {
        throw("Divisão por 0!");//lançar
        
    }else{
        console.log(x/y);
    }
    

} catch (error) {
    console.log("oii " + error);
    
} finally{
    console.log("fim");
}
*/