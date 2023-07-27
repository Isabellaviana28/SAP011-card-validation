function alerta() {
  var botao = document.getElementById ("numeros").value;
  var botao1 = botao.charAt(0);
  var botao2 = botao.charAt(1);
  var botao3 = botao.charAt(2);
  var botao4 = botao.charAt(3);
  var botao5 = botao.charAt(4);
  var botao6 = botao.charAt(5);
  var botao7 = botao.charAt(6);
  var botao8 = botao.charAt(7);
  var botao9 = botao.charAt(8);
  var botao10 = botao.charAt(9);
  var botao11= botao.charAt(10);
  var botao12= botao.charAt(11);
  var botao13= botao.charAt(12);
  var botao14= botao.charAt(13);
  var botao15= botao.charAt(14);
  var botao16 = botao.charAt(15);

  var arrayDeNumeros = [
    botao1,
    botao2,
    botao3,
    botao4,
    botao5,
    botao6,
    botao7,
    botao8,
    botao9,
    botao10,
    botao11,
    botao12,
    botao13,
    botao14,
    botao15,
    botao16,
  ];

  var Ndobro = arrayDeNumeros[1]*2;
  var Ndobro2 =arrayDeNumeros[3]*2;
  var Ndobro3 = arrayDeNumeros[5]*2;
  var Ndobro4 = arrayDeNumeros[7]*2;
  alert (Ndobro)
  

  alert (botao);
}
document.getElementById ("botao").addEventListener("click", alerta);