var numSecreto = Math.floor(Math.random() * 11);
console.log(numSecreto);

let tentativas = 3;

let chute = prompt(
  `Chute um número de 1 a 10. Você tem ${tentativas} tentativas.`
);

while (tentativas != 0) {
  if (chute == numSecreto) {
    alert("Parabéns! Você acertou!");
    break;
  } else if (chute > 10) {
    chute = prompt("Chute um número de 1 a 10.");
  } else {
    chute = prompt(
      `Você errou! Chute um número de 1 a 10, você tem ${tentativas}. tentativas`
    );
  }
  tentativas--;
}
