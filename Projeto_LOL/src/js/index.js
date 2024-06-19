const botao = document.querySelectorAll('.botao');
const personagem = document.querySelectorAll(".personagem");


botao.forEach((botao, indice)=> {
    botao.addEventListener('click', () => {
        desselecionarBotao();
        desselecionarPersonagem();
 
        botao.classList.add("selecionado");
        personagem[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem(){
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao(){
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}