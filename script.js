//01- crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
//let dia = "tarde";
//if (dia === "claro") {
//console.log("O dia esta claro");
//} else {
//console.log("esta de noite");
//}
// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()
//for (let contador = 0; contador <= 20; contador += 2) {
//console.log(contador);
//}
//03 - crie uma função que exiba uma mensagem no console
//function mensagem() {
//console.log("Não importa o quão lento você vá desde que você não pare");
//}
//mensagem();

//04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
//function apresentar(nome, sobrenome) {
//console.log(`Meu nome é ${nome} meu sobre nome é ${sobrenome}`);
//}
//apresentar("Eliane", "Santos");

//05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
//function informação(nome, idade, musica) {
//console.log(nome, idade, musica);
//console.log(`Meu nome é ${nome} tenho ${idade} e gosto de ${musica}`);
//}
//informação("Eliane", 36, "sertanejo");

//06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

//function dados(filme, musica) {
//console.log(filme, musica);
//console.log(`Gosto do ${filme} e da musica ${musica}`);
//}
//dados("titanic", "Flor");

//07 - crie uma função que retorne o triplo do número recebido no parâmetro da função
//function triplo(primeiroValor) {
//console.log(primeiroValor * 3);
//}
//triplo(6);
//triplo(250);
//triplo(1.0);

//08 - crie uma função que  verifique se uma  variável é true ou false
//let variavel = true;
//function verificar() {
//console.log(`A variável é ${variavel}`);
//if (variavel === true) {
//console.log("A variável é verdadeira!");
//} else {
//console.log("A variavel é falsa!");
//}
//}
//verificar();

//09 - Crie um array que receba 5 itens e exiba no console.
//let lanches = ["x salada", "big mac", "pizza", "coxinha", "esfira"];
//console.log(lanches);

//10 - Utilize um método para adicionar um nome ao inicio do array.
//lanches.unshift("pudim");
//console.log(lanches);

//11 - Utilize um método para remover o último nome do array.
//lanches.pop();
//console.log(lanches);

//12 - Utilize um método para adicionar dois nomes ao fim do array.
//lanches.push("açaí", "mousse");
//console.log(lanches);

//13 - Utilize um método para remover o primeiro nome do array.
//lanches.shift();
//console.log(lanches);

//14 - Utilize um método para organizar em ordem crescente o seguinte array:
//let numeros = [7, 5, 6, 3, 8, 9, 2, 1, 4];

//console.log(
//numeros.sort(function (a, b) {
//return a - b;
//})
//);

//15 - Crie um objeto que receba ao menos três propriedades sobre você.
let eliane = {
  comidas: "lasanha,churrasco,parmediana",
  roby: "dançar,barzinho,filme",
  bebidas: "cerveja,caipirinha,agua"
};
console.log(eliane.comidas);
console.log(eliane.roby);
console.log(eliane.bebidas);

//16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
eliane.sobremesas = "pudim,mouse,torta de morango";
console.log(eliane.sobremesas);

//17 - Remova uma propriedade desse objeto.
delete eliane.bebidas;

//18 - Mostre no console todas as propriedades desse objeto.
console.log(eliane);

//19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
//Na propriedade amigos, adicione ao menos 4 amigos.

let cadastro = [
  {
    nome: "Paulo",
    idade: 45,
    telefone: 96571245,
    amigos: ["Marcio", "Matheus", "Erico", "Moacir"]
  },
  {
    nome: "Anderson",
    idade: 26,
    telefone: 9665575,
    amigos: ["Dani", "Gil", "Edson", "Adriana"]
  },
  {
    nome: "Aline",
    idade: 34,
    telefone: 9671924,
    amigos: ["Renato", "Fernanda", "lindalva", "Keila"]
  },
  {
    nome: "Danielly",
    idade: 16,
    telefone: 1988124,
    amigos: ["Grazi", "Willian", "lucas", "Isabela"]
  },
  {
    nome: "Lis",
    idade: 20,
    telefone: 97798853,
    amigos: ["Felipe", "Samuel", "Rihana", "Laura"]
  }
];
console.log(cadastro);

//20 - Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[3]);
console.log(cadastro[1].amigos[2]);
console.log(cadastro[2].amigos[0]);
console.log(cadastro[3].amigos[1]);
console.log(cadastro[4].amigos[4]);
