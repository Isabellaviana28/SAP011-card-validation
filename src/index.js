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

  var Ndobro = Number(arrayDeNumeros[1])*2;
  var Ndobro2 =arrayDeNumeros[3]*2;
  var Ndobro3 = arrayDeNumeros[5]*2;
  var Ndobro4 = arrayDeNumeros[7]*2;

alert (Ndobro)
   
  if (Ndobro >9) {
 var verificar1 = Math.floor(Ndobro / 10); // Obtém o primeiro algarismo
   var verificar2 = Ndobro % 10; // Obtém o segundo algarismo
  var resultado1 =  verificar1 + verificar2; // Soma os algarismos
    alert (resultado1);
  } 
  var verificar3 = Math.floor(Ndobro2 / 10); // Obtém o primeiro algarismo
  var verificar4 = Ndobro2 % 10; // Obtém o segundo algarismo
  var resultado2 =  verificar3 + verificar4; // Soma os algarismos
  alert (resultado2);

  var verificar5 = Math.floor(Ndobro3 / 10); // Obtém o primeiro algarismo
  var verificar6 = Ndobro3 % 10; // Obtém o segundo algarismo
  var resultado3 =  verificar5 + verificar6; // Soma os algarismos
  alert (resultado3);

  var verificar7 = Math.floor(Ndobro4 / 10); // Obtém o primeiro algarismo
  var verificar8 = Ndobro4 % 10; // Obtém o segundo algarismo
 var resultado4 =  verificar7 + verificar8; // Soma os algarismos
  alert (resultado4);

 /* var verificar2 = Ndobro.toString().charAt (0) 
  if (verificar2 >9) {
    var resultado2 = verificar2
    var algarismo2 = verificar2.length ()
  } 
  
  var verificar3 = Ndobro.toString().charAt (0) 
  if (verificar3 >9) {
    var resultado3 = verificar3
    var algarismo3 = verificar3.length ()
  }  
  
  var verificar4 = Ndobro.toString().charAt () 
  if (verificar4 >9) {
    var resultado4 = verificar4
    var algarismo4 = verificar4.length ()
  } 



  

  var verificar2 = Math.floor(resultado2 / 10); // Obtém o primeiro algarismo
  var verificar2 = resultado2 % 10; // Obtém o segundo algarismo
  resultado2 =  verificar2 + algarismo2; // Soma os algarismos
  alert (verificar2);
  var verificar3 = Math.floor(resultado3 / 10); // Obtém o primeiro algarismo
  var verificar3 = resultado2 % 10; // Obtém o segundo algarismo
  resultado3 =  verificar3 + algarismo3; // Soma os algarismos
  alert (verificar3);
  var verificar4 = Math.floor(resultado4 / 10); // Obtém o primeiro algarismo
  var verificar4 = resultado2 % 10; // Obtém o segundo algarismo
  resultado4 =  verificar4 + algarismo4; // Soma os algarismos
  alert (verificar4); */
} 



document.getElementById ("botao").addEventListener("click", alerta);