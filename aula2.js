
 let numero = numeroSecreto();
 console.log('Número secreto: ' + numero);
function exibirTextaNaela(tag, texto){
    let campo = document.querySelector(tag);
    
    campo.innerHTML = texto;
}

exibirTextaNaela('h1', 'Hora do Desafio');
exibirTextaNaela('p', 'Descubra o número secreto entre 1 e 10');

function verificarChute(){

    let chute = document.querySelector('input').value;
    console.log(chute == numero);
}

function numeroSecreto() {
    return parseInt(Math.random() * 10 + 1);  
} 
