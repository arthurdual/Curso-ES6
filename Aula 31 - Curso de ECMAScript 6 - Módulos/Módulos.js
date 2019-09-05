/*jshint esversion: 6*/

import {PI, soma,subtraçao}from"./calculadora";

import { showMessage, showMessageInfo } from "./mensagem";

showMessage(PI);

showMessage(soma(8,5,7));
showMessageInfo(subtraçao(10,6));

// digite o comando: informando a pasta e os imports pra compilar os arquivos

//compile-modules convert .\Módulos.js .\calculadora.js .\mensagem.js -I . -o build --format commonjs
//node Módulos.js retorna:
//C:\Users\arthu\OneDrive\Área de Trabalho\Curso javascript ES6 Filipe morelli\Aula 31 - Curso de ECMAScript 6 - Módulos\build>node Módulos.js
//3.141592653589793
