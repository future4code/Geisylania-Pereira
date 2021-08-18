//Exercico 1
//Os numeros vao esta somando entre eles,
// até o 6 +4, pois a ordem e numero menores que 5,
// entao nao passara de 6 + 4

//  Exercicio 2
// a) Vai imprimir numero maiores que 18 identificados na lista,
// 18,21,23,25,27,30.

//b)

// Exercicio 3
// Sera imprimido o numero digitado pelo usuario em *
//e com linhas uma abaixo da outra, somando a anterior e a linha atual.

//Exercicio 1

const animais = Number(prompt("Quantos animais voce tem? "))

 if (animais === 0){
  console.log("Que pena! Você pode adotar um pet! ")
 } else if (animais > 0){
     console.log(animais)
 }for ( let i = 0; i<= animais; i++) {
   const nomesPets = prompt("Qual o nome deles?")
 console.log(`Tenho, ${animais}, são eles ${nomesPets}`);

 }

