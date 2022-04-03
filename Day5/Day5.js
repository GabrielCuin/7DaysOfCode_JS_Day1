const saida = document.getElementById('saida');

const pergunta1 = prompt(
  "Você quer adicionar algum item a sua lista de compras? (s/n)"
);
var add = false;
const lista = [];

if (pergunta1 == "s") {
  add = true;

  while (add) {
    const produto = prompt("O que você gostaria de adicionar?");
    const categoria = prompt("Em qual categoria esse produto se encaixa?");

    lista.push(item);
    console.log(lista);

    const pergunta2 = prompt("Gostaria de selecionar outro? (s/n)");
    if (pergunta2 == "n") {
      add = false;
      console.log(add)
    }else {
    }
  }
}
