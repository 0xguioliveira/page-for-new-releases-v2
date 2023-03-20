const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () =>{
        destativarBotaoSelecionado();

        selecionarBotaoSelecionado(botao);        

        esconderImagemAtiva();

        mostrarImagem(indice);      

    })
})

function destativarBotaoSelecionado(){
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado')
}

function selecionarBotaoSelecionado(botao){
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function mostrarImagem(indice){
    imagens[indice].classList.add('ativa')
}
