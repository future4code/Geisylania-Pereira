/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack")
     
if(confirm("Você quer jogar ? ")) {
 console.log("Vamos iniciar")
  
 cartaJogador = [comprarCarta(), comprarCarta()]
 console.log(cartaJogador)

 cartaAdversario = [comprarCarta(),comprarCarta()]

   
 const jogadorSoma = cartaJogador[0].valor+ cartaJogador[1].valor

 const adversarioSoma = cartaAdversario[0].valor+ cartaAdversario[1].valor

 if (jogadorSoma > adversarioSoma) {
 console.log("Você ganhou o jogo!")

 }else if (jogadorSoma < adversarioSoma){
 console.log("O adversario ganhou!")
   
}else {
 console.log("O jogo finalizou" ) 
 }
}
 





