let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];

let comida = "";
let categoria = "";
let comidaRemovida = "";

let removerDaLista = "não";
let adicionarMais = "sim";  

while(adicionarMais != "não"){
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    while (adicionarMais != "sim" && adicionarMais != "não") {
	alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (adicionarMais === "não"){  
        break;
    }
	
    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'laticínios'){
        laticinios.push(comida);
    } else if (categoria === 'doces'){
        doces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
removerDaLista = prompt("Você gostaria de remover algum item da lista? Responda 'sim' ou 'não'.");

while (removerDaLista != "não") {

    categoria = prompt("A qual categoria pertence o item que será removido? 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if(categoria === 'frutas'){
        comidaRemovida = prompt("Qual comida será removida?")
        if (!frutas.includes(comidaRemovida)) {
            alert(`${comidaRemovida} não foi encontrado na lista de frutas.`)
        }else {
            let index = frutas.indexOf(comidaRemovida);
            frutas.splice(index, 1);
        }
    } else if (categoria === 'laticínios'){
        comidaRemovida = prompt("Qual comida será removida?")
        if (!laticinios.includes(comidaRemovida)) {
            alert(`${comidaRemovida} não foi encontrado na lista de laticínios.`)
        }else {
            let index = laticinios.indexOf(comidaRemovida);
            laticinios.splice(index, 1);
        }
    } else if (categoria === 'doces'){
        comidaRemovida = prompt("Qual comida será removida?")
        if (!doces.includes(comidaRemovida)) {
            alert(`${comidaRemovida} não foi encontrado na lista de doces.`)
        }else {
            let index = doces.indexOf(comidaRemovida);
            doces.splice(index, 1);
        }
    } else if (categoria === 'congelados'){
        comidaRemovida = prompt("Qual comida será removida?")
        if (!congelados.includes(comidaRemovida)) {
            alert(`${comidaRemovida} não foi encontrado na lista de congelados.`)
        }else {
            let index = congelados.indexOf(comidaRemovida);
            congelados.splice(index, 1);
        }
    } else {
        alert("Essa categoria não foi pré-definida.")
    }

    alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
    removerDaLista = prompt("Você gostaria de remover algum item da lista? Responda 'sim' ou 'não'.");
}