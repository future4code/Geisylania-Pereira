//Exercicio 1
//a) Imprimira a identificaçao de cada iten, com a array .

//Exercicio 2
//a)Imprimira novoArrayB = no caso os nomes pois o return esa item.nomes

//Exercicio 3
//a)Imprimira o item apelido da chijo,item 2

//Exercicio 1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//a)  const nomesDog = pets.map((pets,index, array) => {
//     return pets.nome
// })
// console.log(nomesDog)
 
//b) const novaArraySalsicha = pets.filter((raca, index, array) => {
//     return raca.raca === "Salsicha"
//  })
// console.log(novaArraySalsicha)

//c)
//  const poodlePets = pets.filter((raca) =>{
//   return raca.raca === "Poodle"
    
//  })
//  const descontoDez = poodlePets.map((poodle) => {
//     return `Voce ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}`
//  })
//  console.log("item c",  descontoDez);

//Exercicio 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const produtosIdentificados = produtos.map((mercado) => {
     return mercado.nome
  });

  console.log("item a", produtosIdentificados);

 const descontoProduto = produtos.map((mercado) => {
     return { nome: mercado.nome, preco: (mercado.preco * 0.95).toFixed(2)}
 });

console.log("intem b", descontoProduto);

const bebidas = produtos.filter((mercado) => {
    return mercado.categoria === "Bebidas";
});

console.log("item c", bebidas);

const produtosYpe = produtos.filter((mercado) => {
    return mercado.nome.includes("Ypê")
});
console.log("iten d", produtosYpe);

const compreYpe = produtosYpe.map((mercado) =>{
    return `Compre ${mercado.nome} por ${mercado.preco}`;
});
console.log("item e", compreYpe);

