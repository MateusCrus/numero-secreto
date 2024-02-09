let listaNumeroSorteado = [];
let numeroMaximo = 10
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;
exibeTextoInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
tentativas ++

    if (chute == numeroSecreto){
        verificaTextoNaTela('h1', 'Acertou!');
        verificaTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            verificaTextoNaTela('p', 'O número secreto é menor!');
        } else{
            verificaTextoNaTela('p', 'O número secreto é maior!');
        }
        limparCampo()
    }
}
function verificaTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibeTextoInicial(){
    verificaTextoNaTela('h1', 'jogo do número secreto');
    verificaTextoNaTela('p', 'escolha um número entre 1 e 10');
}
function geraNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let numeroDeElementosNaLista = listaNumeroSorteado.length

    if( numeroDeElementosNaLista == numeroMaximo){
        listaNumeroSorteado = [];
    }
    if (listaNumeroSorteado.includes(numeroEscolhido)){
        return geraNumeroAleatorio();
    }
        else{
            listaNumeroSorteado.push(numeroEscolhido);
            console.log(listaNumeroSorteado)
            return numeroEscolhido;
        }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ('');
}

function reiniciarJogo(){
    numeroSecreto = geraNumeroAleatorio();
    verificarChute();
    tentativas = 1;
    exibeTextoInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

