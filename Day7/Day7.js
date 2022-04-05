let resposta = "sim";
let primeiroNumero = 0;
let segundoNumero = 0;
let operacao = "";

while (resposta != "não") {
  resposta = prompt(
    "Você quer usar essa calculadora? Responda com 'sim' ou 'não'."
  );

  while (resposta != "sim" && resposta != "não") {
    alert("Resposta não reconhecida.");
    resposta = prompt(
      "Você quer testar essa calculadora? Responda com 'sim' ou 'não'."
    );
  }

  if (resposta === "não") {
    alert("Resposta não reconhecida.");
    break;
  }

  operacao = prompt(
    "Qual operação desaja realizar? Soma, subtração, multiplicação, divisão ou sair."
  );

  if (operacao == "Soma") {
    primeiroNumero = prompt("Digite o primeiro número.");
    segundoNumero = prompt("Digite o segundo número.");
    alert(Soma(primeiroNumero, segundoNumero));
  } 
  else if (operacao == "subtração") {
    primeiroNumero = prompt("Digite o primeiro número.");
    segundoNumero = prompt("Digite o segundo número.");
    alert(Subtracao(primeiroNumero, segundoNumero));
  } 
  else if (operacao == "multiplicação") {
    primeiroNumero = prompt("Digite o primeiro número.");
    segundoNumero = prompt("Digite o segundo número.");
    alert(Multiplicacao(primeiroNumero, segundoNumero));
  } 
  else if (operacao == "divisão") {
    primeiroNumero = prompt("Digite o primeiro número.");
    segundoNumero = prompt("Digite o segundo número.");
    alert(Divisao(primeiroNumero, segundoNumero));
  } 
  else if (operacao == "sair") {
    alert("Ok! Até a próxima!");
    break;
  } 
  else {
    alert("Resposta não reconhecida.");
  }
}

function Soma(a, b) {
    const p = parseInt(a);
    const s = parseInt(b);
    return p + s;
}

function Subtracao(a, b) {
    const p = parseInt(a);
    const s = parseInt(b);
    return p - s;
}

function Multiplicacao(a, b) {
    const p = parseInt(a);
    const s = parseInt(b);
    return p * s;
}

function Divisao(a, b) {
    const p = parseInt(a);
    const s = parseInt(b);
    return p / s;
}