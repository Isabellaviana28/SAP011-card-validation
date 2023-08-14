import validator from './validator.js';
const numerocartao = document.getElementById("numeros").value;
document.getElementById("botao").addEventListener("click", validator.isValid(numerocartao));