const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite 1 para o primeiro e 2 para o segundo");
let linguagem = "";

if (area == 1){
    linguagem = prompt("Você quer aprender React ou Vue?");
}
else if (area == 2){
    linguagem = prompt("Você quer aprender C# ou Java?");
}
else {
    alert("Por favor, reinicie a página e insira uma resposta.");
}

const especialidadeOuFullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
if (especialidadeOuFullstack == 1){
    alert(`Ótimo, Continue se especializando em ${linguagem}`);
}
else if (especialidadeOuFullstack == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else {
    alert("Você não inseriu um valor válido!");
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}