const validator = {
  isValid,
};

export default validator;
function isValid(numerocartao) {
  const cardv1 = numerocartao.charAt(0);
  const cardv2 = numerocartao.charAt(1);
  const cardv3 = numerocartao.charAt(2);
  const cardv4 = numerocartao.charAt(3);
  const cardv5 = numerocartao.charAt(4);
  const cardv6 = numerocartao.charAt(5);
  const cardv7 = numerocartao.charAt(6);
  const cardv8 = numerocartao.charAt(7);
  const cardv9 = numerocartao.charAt(8);
  const cardv10 = numerocartao.charAt(9);
  const cardv11 = numerocartao.charAt(10);
  const cardv12 = numerocartao.charAt(11);
  const cardv13 = numerocartao.charAt(12);
  const cardv14 = numerocartao.charAt(13);
  const cardv15 = numerocartao.charAt(14);
  const cardv16 = numerocartao.charAt(15);

  const arrayDeNumeros = [
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

  const Ndobro = Number(arrayDeNumeros[1]) * 2;
  const Ndobro2 = Number(arrayDeNumeros[3]) * 2;
  const Ndobro3 = Number(arrayDeNumeros[5]) * 2;
  const Ndobro4 = Number(arrayDeNumeros[7]) * 2;
  const Ndobro5 = Number(arrayDeNumeros[9]) * 2;
  const Ndobro6 = Number(arrayDeNumeros[11]) * 2;
  const Ndobro7 = Number(arrayDeNumeros[13]) * 2;
  const Ndobro8 = Number(arrayDeNumeros[15]) * 2;
  let resultado1 = 0;
  if (Ndobro > 9) {
    const verificar1 = Math.floor(Ndobro / 10); // Obtém o primeiro algarismo
    const verificar2 = Ndobro % 10; // Obtém o segundo algarismo
    resultado1 = verificar1 + verificar2; // Soma os algarismos
  } else {
    resultado1 = Ndobro;
  }
  let resultado2 = 0;
  if (Ndobro2 > 9) {
    const verificar3 = Math.floor(Ndobro2 / 10); // Obtém o primeiro algarismo
    const verificar4 = Ndobro2 % 10; // Obtém o segundo algarismo
    resultado2 = verificar3 + verificar4; // Soma os algarismos
  } else {
    resultado2 = Ndobro2;
  }
  let resultado3 = 0;
  if (Ndobro3 > 9) {
    const verificar5 = Math.floor(Ndobro3 / 10); // Obtém o primeiro algarismo
    const verificar6 = Ndobro3 % 10; // Obtém o segundo algarismo
    resultado3 = verificar5 + verificar6; // Soma os algarismos
  } else {
    resultado3 = Ndobro3;
  }
  let resultado4 = 0;
  if (Ndobro4 > 9) {
    const verificar7 = Math.floor(Ndobro4 / 10); // Obtém o primeiro algarismo
    const verificar8 = Ndobro4 % 10; // Obtém o segundo algarismo
    resultado4 = verificar7 + verificar8; // Soma os algarismos
  } else {
    resultado4 = Ndobro4;
  }
  let resultado5 =0;
  if (Ndobro5 > 9) {
    const verificar9 = Math.floor(Ndobro5 / 10); // Obtém o primeiro algarismo
    const verificar10 = Ndobro5 % 10; // Obtém o segundo algarismo
    resultado5 = verificar9 + verificar10; // Soma os algarismos
  } else {
    resultado5 = Ndobro5;
  }
  let resultado6 = 0;
  if (Ndobro6 > 9) {
    const verificar11 = Math.floor(Ndobro6 / 10); // Obtém o primeiro algarismo
    const verificar12 = Ndobro6 % 10; // Obtém o segundo algarismo
    resultado6 = verificar11 + verificar12; // Soma os algarismos
  } else {
    resultado6 = Ndobro6;
  } 
  let resultado7=0;
  if (Ndobro7 > 9) {
    const verificar13 = Math.floor(Ndobro7 / 10); // Obtém o primeiro algarismo
    const verificar14 = Ndobro7 % 10; // Obtém o segundo algarismo
    resultado7 = verificar13 + verificar14; // Soma os algarismos
  } else {
    resultado7 = Ndobro7;
  }
  let resultado8 = 0;
  if (Ndobro8 > 9) {
    const verificar15 = Math.floor(Ndobro8 / 10); // Obtém o primeiro algarismo
    const verificar16 = Ndobro8 % 10; // Obtém o segundo algarismo
    resultado8 = verificar15 + verificar16; // Soma os algarismos
  } else {
    resultado8 = Ndobro8;
  }
  const resultados = [
    resultado1,
    resultado2,
    resultado3,
    resultado4,
    resultado5,
    resultado6,
    resultado7,
    resultado8,
  ];
  alert(resultados);
  let soma = 0;
  soma += resultados[0];
  soma += resultados[1];
  soma += resultados[2];
  soma += resultados[3];
  soma += resultados[4];
  soma += resultados[5];
  soma += resultados[6];
  soma += resultados[7];
  soma += Number(arrayDeNumeros[0]);
  soma += Number(arrayDeNumeros[2]);
  soma += Number(arrayDeNumeros[4]);
  soma += Number(arrayDeNumeros[6]);
  soma += Number(arrayDeNumeros[8]);
  soma += Number(arrayDeNumeros[10]);
  soma += Number(arrayDeNumeros[12]);
  soma += Number(arrayDeNumeros[14]);
  alert(soma);
  if (soma % 10 === 0) {
    alert("Número válido");
    return true;
  } else {
    alert("número inválido");
    return false;
  }
}
