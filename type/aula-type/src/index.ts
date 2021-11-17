// console.log("Ola mundo")

// let company = "Labenu"
// // const age: number = 5

// console.log(company)
// Exercicio 1

// a) let minhaString = "5"   O tipo 'number' não pode ser atribuído ao tipo 'string'.

// b) let meuNumero= 5
// Para aceitar numeros, é necessario usar o codigo:
// const age: number = 5
// console.log(age) você imprimi no terminal com o codigo (node build/index.js) - onde sta a pasta com o arquivo index.js
// Para o uso de string é necessario usar o codigo :
// let minhaFrase = "Ola mundo"
// console.log(company) você imprimi no terminal com o codigo (node build/index.js) - onde sta a pasta com o arquivo index.js
// c)
// const person: { name: string, age: number, cor: string} = {
//     name: "Geisy",
//     age: 27,
//     cor: "Black"
// }
//     console.log(person)
// d) Seleção de cores utilizando o (enum)
// enum Escolhercores {
//     cor1 = "Branco",
//     cor2= "Amarelo",
//     cor3 = "Azul",
//     cor4 = "Verde",
//     cor5 = "Vermelho",
//     cor6 = "Violeta"
// }
// console.log(Escolhercores)

// Exercicios 2

// a)
// type Estatistica = {
//     maior: number,
//     menor: number,
//     media: number
// }

// function obterEstatisticas(numeros: number[]): Estatistica {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// // b)
// type IdadeMaior = {
//     numeros: number[],
//     obterEstatisticas: (numeros: number[]) => Estatistica
// }

// const amostraDeIdades = {
//     numeros: [21, 18, 65, 44, 15, 18],
// }
//     export obterEstatisticas

// c)
// const array: number[] = [21, 18, 65, 44, 15, 18]
// console.log(array)

// Exercicio 3

// type Discricao ={
//     name: string,
//     frase: string
// }
// const posts = [
//     {
//     autor: "Alvo Dumbledore",
//     texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//     autor: "Severo Snape",
//     texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//     autor: "Hermione Granger",
//     texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//     autor: "Dobby",
//     texto: "Dobby é um elfo livre!"
//     },
//     {
//     autor: "Lord Voldemort",
//     texto: "Avada Kedavra!"
//     }
// ]
// console.log(posts)
