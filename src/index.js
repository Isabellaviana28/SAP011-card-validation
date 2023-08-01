function alerta() {
  var numerocartao = document.getElementById ("numeros").value;
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
  var cardv12= numerocartao.charAt(11);
  var cardv13= numerocartao.charAt(12);
  var cardv14= numerocartao.charAt(13);
  var cardv15= numerocartao.charAt(14);
  var cardv16= numerocartao.charAt(15);

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

  var Ndobro = arrayDeNumeros[1]*2;
  var Ndobro2 =arrayDeNumeros[3]*2;
  var Ndobro3 = arrayDeNumeros[5]*2;
  var Ndobro4 = arrayDeNumeros[7]*2;


   var verificar1 = Ndobro.charAt (1) 
  if (verificar1 >9) 

  var verificar2 = Ndobro.charAt (2) 
  if (verificar2 >9)
  
  var verificar3 = Ndobro.charAt (3) 
  if (verificar3 >9) 
  
  var verificar4 = Ndobro.charAt (4) 
  if (verificar4 >9) 


  alert (botao);
}
document.getElementById ("botao").addEventListener("click", alerta);