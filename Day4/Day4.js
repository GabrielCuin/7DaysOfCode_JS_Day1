var numSecreto = Math.floor(Math.random() * 11);
console.log(numSecreto);
var acertou = false;

let tentativas = 2;

let chute = prompt(
  `Chute um número de 1 a 10. Você tem ${tentativas+1} tentativas.`
);

while (tentativas > 0) {
  if (chute == numSecreto) {
    acertou = true;
    alert("Parabéns! Você acertou!");
    break;
  } else if (chute > 10) {
    chute = prompt("Chute um número de 1 a 10.");
  } else {
    tentativas--;
    chute = prompt(
      `Você errou! Chute um número de 1 a 10, você tem ${tentativas+1}. tentativas`
    );
  }
}
if (tentativas === 0 && acertou === false) {
  alert(`Infelizmente, suas tentativas acabaram, o número  é ${numSecreto}`);
}
