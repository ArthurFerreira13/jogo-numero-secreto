
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

function olaMundo() {
    alert('Olá, mundo!');
    console.log('Olá, mundo!');
}
console.log(olaMundo());

function recebeNome(nome) {
  
    alert('Olá, ' + nome + '!');
    console.log('Olá, ' + nome + '!');
}   
console.log(recebeNome(2));

function multiplicador(num1, num2) {
    let resultado = num1 * num2;
    alert('O resultado da multiplicação é: ' + resultado);
    console.log('Multiplicador: ' + resultado);
}
console.log(multiplicador(3, 20));

function teste(num1, num2) {
    let soma = (num1 + num2) / 2;
    if (soma > 7) {
        return 'Passou direto' + soma;
    } if (soma <= 7 && soma >= 4) {
        return 'esta de recuperação' + soma;
    }
    else {
        return 'Reprovado' + soma;
    }

}

 console.log(teste(10,8));