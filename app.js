let listaDeNumeros = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function mensagemInicial(){
    exibirTextoNaTela('h1', 'Bem vindo ao jogo do número secreto!');
    exibirTextoNaTela('p', 'Chute um número entre 0 e 100');
}

mensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log (chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou, parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto)
            exibirTextoNaTela('p', 'O número secreto é menor!');
        else{
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumeros = listaDeNumeros.length;

    if (quantidadeDeNumeros == numeroLimite)
        listaDeNumeros = [];
    if (listaDeNumeros.includes(numeroEscolhido)) {
        return gerarNumero();
    } else{
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros)
        return numeroEscolhido;
    }

}
console.log (`o numero é ${numeroSecreto}`);

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    console.log (`o numero é ${numeroSecreto}`);
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
