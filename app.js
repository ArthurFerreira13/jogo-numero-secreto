
let listaDeNumerosSorteados = [];
let numero = numeroSecreto();
console.log('Número secreto: ' + numero);
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){

 exibirTexto('h1', 'Hora do Desafio');
 exibirTexto('p', 'Descubra o número secreto entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
    
    let chute = document.querySelector('input').value;
    if ( chute == '' || chute < 1 || chute > 10 || isNaN(chute)) {
        exibirTexto('p', 'Valor inválido. Digite um número entre 1 e 10.');
        limparCampo();
        return;
    }
    if (chute == numero) {
        exibirTexto('h1', 'Parabéns!');
        let palavraTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas =  `Você acertou em ${tentativas} ${palavraTentativas}`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numero) {
            exibirTexto('p', 'Seu chute foi maior que o número secreto. Tente novamente!');
        }

        else {
            exibirTexto('p', 'Seu chute foi menor que o número secreto. Tente novamente!');
        }
        tentativas++;
        limparCampo();

    }
}

// teste deletar commit
function numeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == 10){
        listaDeNumerosSorteados = [];
        console.log('Lista de números sorteados foi reiniciada.');
    }

    if( listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroSecreto();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log('Números sorteados: ' + listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numero = numeroSecreto();
    tentativas = 1;
    console.log('Número secreto: ' + numero);
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    limparCampo();
}

