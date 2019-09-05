/*expreções regulares  */
/* peag uma string em um padraode string*/

//var r = new RegExp('asdf',"g");
/*
var isCEP = /[0-9]{5}-[0-9]{3}/g;//identifica sem temum cep no texto

var texto =("arthur cép 88845-678 mayza cep 15879-585 letcia cep 12345-678");

var regexp1 = /\s/;//meta caracter espaco"\ " tab \t quebra de linha \n ou todos esses \s
var regexp2 = /\d/;//digito
var regexp3 = /\D/;//nao digito

console.log(
  //isCEP.test(texto),//retorna se tem cep
  texto.match(isCEP),//retorna cep
  //isCEP.exec(texto)//retorna cep

  texto.match(regexp1),
  texto.match(regexp2),
  texto.match(regexp3)
);

*/
var texto =("arthur <b>Dutra</b> <i>alves</i>");

var bold = /<b>.*<\/b>/;//pega texto <b></b> com qualquer coisa dentro .*
var textoApenas = /<b>(.*)<\/b>/; //pega o que tiver entre <b> </b>


var boldItalic = /<[bi]>.*<\/[bi]>/;//pega texto <b></b> e <i> </i> com qualquer coisa dentro .*
var textoApenasQualQuerTag = /<.*>(.*)<\/.*>/; //pega o que tiver entre <qualquer letra> </qualquerletra>

var PegaTagbComAtribuitosOUTagiComAtributos = /<b>.*<\/b>|<.*>(.*)<\/i>/;
//PegaTagbComAtribuitosOUTagiComAtributos

console.log(
    texto.match(bold),
    texto.match(textoApenas),
    texto.match(boldItalic),
    texto.match(textoApenasQualQuerTag),
    texto.match(PegaTagbComAtribuitosOUTagiComAtributos)

    

);

