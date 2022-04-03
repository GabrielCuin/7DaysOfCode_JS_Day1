const saida1 = document.getElementById('saida');
const saida2 = document.getElementById('saida--2');

// TODO - Qual o seu nome?
const nome = prompt("Digite seu primeiro nome.");
// TODO - Quantos anos você tem?
const idade = prompt("Digite sua idade.")
// TODO - Qual linguagem de programação você está estudando?
const linguagem = prompt("Insira a linguage de programação que esta estudando no momento.");

saida1.innerHTML = `<p class="saida__texto">Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!</p>`

const pergunta = prompt("Você gosta da linguagem que esta estudando? Responda 1 para SIM e 2 para NÃo.")

if(pergunta == 1) {
    saida2.innerHTML = `<p class="saida__texto--2">Muito bom! Continue estudando e você terá muito sucesso.</p>`
}else {
    saida2.innerHTML = `<p class="saida__texto--2">Ahh que pena... Já tentou aprender outras linguagens?</p>`
}

console.log(nome)
console.log(idade)
console.log(linguagem)