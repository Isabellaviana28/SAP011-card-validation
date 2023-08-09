function alerta() {
  var numerocartao = document.getElementById("numeros").value;
  var cardv1 = numerocartao.charAt(0);
  var cardv2 = numerocartao.charAt(1);
  var cardv3 = numerocartao.charAt(2);
  var cardv4 = numerocartao.charAt(3);
  var cardv5 = numerocartao.charAt(4);
  var cardv6 = numerocartao.charAt(5);
  var cardv7 = numerocartao.charAt(6);
  var cardv8 = numerocartao.charAt(7);
  var cardv9 = numerocartao.charAt(8);
  var cardv10 = numerocartao.charAt(9);
  var cardv11 = numerocartao.charAt(10);
  var cardv12 = numerocartao.charAt(11);
  var cardv13 = numerocartao.charAt(12);
  var cardv14 = numerocartao.charAt(13);
  var cardv15 = numerocartao.charAt(14);
  var cardv16 = numerocartao.charAt(15);

  var arrayDeNumeros = [
    cardv1,
    cardv2,
    cardv3,
    cardv4,
    cardv5,
    cardv6,
    cardv7,
    cardv8,
    cardv9,
    cardv10,
    cardv11,
    cardv12,
    cardv13,
    cardv14,
    cardv15,
    cardv16,
  ];

  var Ndobro = Number(arrayDeNumeros[1]) * 2;
  var Ndobro2 = Number(arrayDeNumeros[3]) * 2;
  var Ndobro3 = Number(arrayDeNumeros[5]) * 2;
  var Ndobro4 = Number(arrayDeNumeros[7]) * 2;
  var Ndobro5 = Number(arrayDeNumeros[9]) * 2;
  var Ndobro6 = Number(arrayDeNumeros[11]) * 2;
  var Ndobro7 = Number(arrayDeNumeros[13]) * 2;
  var Ndobro8 = Number(arrayDeNumeros[15]) * 2;
 

  alert(Ndobro);

  if (Ndobro > 9) {
    var verificar1 = Math.floor(Ndobro / 10); // Obtém o primeiro algarismo
    var verificar2 = Ndobro % 10; // Obtém o segundo algarismo
    var resultado1 = verificar1 + verificar2; // Soma os algarismos
    alert(resultado1);
  }
  else {
    var resultado1 = Ndobro
  }
  if (Ndobro2 > 9) {
    var verificar3 = Math.floor(Ndobro2 / 10); // Obtém o primeiro algarismo
    var verificar4 = Ndobro2 % 10; // Obtém o segundo algarismo
    var resultado2 = verificar3 + verificar4; // Soma os algarismos
    alert(resultado2);
  }
  else {
    var resultado2 = Ndobro2
  }
  if (Ndobro3 > 9) {
    var verificar5 = Math.floor(Ndobro3 / 10); // Obtém o primeiro algarismo
    var verificar6 = Ndobro3 % 10; // Obtém o segundo algarismo
    var resultado3 = verificar5 + verificar6; // Soma os algarismos
    alert(resultado3);
  }
  else {
    var resultado3 = Ndobro3
  }
  if (Ndobro4 > 9) {
    var verificar7 = Math.floor(Ndobro4 / 10); // Obtém o primeiro algarismo
    var verificar8 = Ndobro4 % 10; // Obtém o segundo algarismo
    var resultado4 = verificar7 + verificar8; // Soma os algarismos
    alert(resultado4);
  }
  else {
    var resultado4 = Ndobro4
  }
  if (Ndobro5 > 9) {
    var verificar9 = Math.floor(Ndobro5 / 10); // Obtém o primeiro algarismo
    var verificar10 = Ndobro5 % 10; // Obtém o segundo algarismo
    var resultado5 = verificar9 + verificar10; // Soma os algarismos
    alert(resultado5);
  }
  else {
    var resultado5 = Ndobro5
  }
  if (Ndobro6 > 9) {
    var verificar11 = Math.floor(Ndobro6 / 10); // Obtém o primeiro algarismo
    var verificar12 = Ndobro6 % 10; // Obtém o segundo algarismo
    var resultado6 = verificar11 + verificar12; // Soma os algarismos
    alert(resultado6);
  }
  else {
    var resultado6 = Ndobro6
  }
  if (Ndobro7 > 9) {
    var verificar13 = Math.floor(Ndobro7 / 10); // Obtém o primeiro algarismo
    var verificar14 = Ndobro7 % 10; // Obtém o segundo algarismo
    var resultado7 = verificar13 + verificar14; // Soma os algarismos
    alert(resultado7);
  }
  else {
    var resultado7 = Ndobro7
  }
  if (Ndobro8 > 9) {
    var verificar15 = Math.floor(Ndobro8 / 10); // Obtém o primeiro algarismo
    var verificar16 = Ndobro8 % 10; // Obtém o segundo algarismo
    var resultado8 = verificar15 + verificar16; // Soma os algarismos
    alert(resultado8);
  }
  else {
    var resultado8 = Ndobro8
  }
  var resultados = [resultado1, resultado2, resultado3, resultado4, resultado5, resultado6, resultado7,resultado8];
  alert (resultados)
  var soma = 0;
  soma += resultados[0]
  soma += resultados[1]
  soma += resultados[2]
  soma += resultados[3]
  soma += resultados[4]
  soma += resultados[5]
  soma += resultados[6]
  soma += resultados[7]
if (soma % 10 == 0) {
  alert ("Número válido")
return true;
}
else {
  alert ("número inválido")
  return false;
}
}

document.getElementById("botao").addEventListener("click", alerta);
