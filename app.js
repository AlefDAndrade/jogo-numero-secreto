let listaNumeroSorteados = [];
let numeroMaximo = 100;
let tantativas = 1;
let numeroSecreto = numeroAleatorio();



function exibirTextNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}



function mensagens() {
    exibirTextNaTela('h1', 'Jodo do número secreto');
    exibirTextNaTela('p', `digite um número entre 1 e ${numeroMaximo}`);
}

mensagens()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let mensagemTentativa = tantativas > 1 ? 'tentativas' : ' tentativa'
        let numeroTentetivas = `Parabens, você acretou em ${tantativas} ${mensagemTentativa}`
        exibirTextNaTela('h1', 'Você Acertou!');
        exibirTextNaTela('p',  numeroTentetivas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
        exibirTextNaTela('p', 'o numero é menor');
        } else {
        exibirTextNaTela('p', 'o número é maior');
        }
        limparCampo()
        tantativas++
        
    }
}

function numeroAleatorio() {
    numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadesElementLista = listaNumeroSorteados.length;
    if (quantidadesElementLista == numeroMaximo) {
        listaNumeroSorteados = [];
    }
    if (listaNumeroSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio()
    } else {
        listaNumeroSorteados.push(numeroEscolhido)
        console.log(listaNumeroSorteados)
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''
}

function newGame() {
    tantativas = 1
    mensagens()
    document.getElementById('reiniciar').setAttribute('disabled', true)
    numeroSecreto = numeroAleatorio()
    limparCampo()
    console.log(numeroSecreto)

}