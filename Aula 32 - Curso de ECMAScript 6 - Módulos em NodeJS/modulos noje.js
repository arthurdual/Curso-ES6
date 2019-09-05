let msg = require("./mensagem");
let {areaQuadrado,retangulo,Pi} = require("./math");

msg.showInfoMessage(areaQuadrado(10));
msg.showErrorMessage(retangulo(5,6));
console.log(Pi);