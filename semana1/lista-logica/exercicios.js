// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt('Qual é a altura do retangulo?'))
  let largura = Number(prompt('Qual é a largura do retangulo?'))
  let area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt('Em que ano estamos?'))
  let anoNascimento = Number(prompt('Em que ano você nasceu?'))
  let idade = anoAtual - anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso/(altura*altura)
  console.log(imc)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt('Qual é seu nome?')
  let idade = Number(prompt('Qual é a sua idade?'))
  let email = prompt('Qual é o seu e-mail?')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
 
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let corUm = prompt("Qual sua cor preferida?")
  let corDois = prompt("Qual sua cor preferida?")
  let corTres = prompt("Qual sua cor preferida?")
  let coresFavoritas = [corUm, corDois, corTres]
  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  console.log(string.toUpperCase())
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let ingresso = (custo/valorIngresso)
  console.log(ingresso)
  return ingresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let compare = string1.length === string2.length
  return compare

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let ultimo = array[array.length-1]
  return ultimo

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 let armazenado = array[0]
 array[0] = array[array.length-1]
 array[array.length-1] = armazenado
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let comparacao = string1.toLowerCase() === string2.toLowerCase()
  return comparacao

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt(`Qual é seu nome? `))
  const anoNasc = Number(prompt(`Data de nascimento? `))
  const emissaoId = Number(prompt(`Data de Emissao da sua ID?`))
  const idadeDoUsuario = (anoAtual - anoNasc)
  const renovar = (anoAtual - emissaoId)

  const condc1 = (idadeDoUsuario <= 20 && renovar >= 5)
  const condc2 = ((idadeDoUsuario > 20  && idadeDoUsuario <=50) && renovar >= 10)
  const condc3 = (idadeDoUsuario > 50 && renovar >= 15)

  console.log(condc1 || condc2 || condc3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
const idade = rompt("Voce tem maias de 18 anos? ")
const escolaridade = prompet("Possui ensino medio? ")
const disponibilidade = prompt("Vode tem disponabilidade")

const cond1 = (idade >= 18 === 18 )
const cond2 = (escolaridade  )
}