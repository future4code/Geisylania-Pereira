//Exercicios 

// const frase = prompt("Digite uma frase")
//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Resposta Letras Maiusculas, trocar vogais 'A' pelo 'i', o tamanho da frase
// "SUBI NUM ONIBUS EM MIRROCOS" 

//const nomeUsuario = prompt("Qual seu nome? ")

//const emailUsuario = prompt("Qual seu email? ")

//const frase = `O email ${emailUsuario} foi cadastrado com sucesso. Seja bem vindo ${nomeUsuario}`

//console.log("Template String:", frase)

//Exercicio 2

const listaComida =["Pizza", "churrasco", "pudim", "batata", "queijo"]
console.log(listaComida)
console.log(`Essas são as minhas comidas preferidas: 
 ${listaComida[0]}
 ${listaComida[1]}
 ${listaComida[2]}
 ${listaComida[3]}
 ${listaComida[4]}`)

 const comidaPref = prompt("Qual sua comida preferida? ")
 
 listaComida[1] = comidaPref
 console.log("comidaPref", listaComida)

