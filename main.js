const buttonSim = document.querySelector('#buttonSim');
const buttonNao = document.querySelector('#buttonNao');
const resposta = document.querySelector('#reposta');

function respostaSim(){
    resposta.innerHTML = 'Ebaaaa! mas não quero ele, quero casar com você';
}
function respostaNao(){
    resposta.innerHTML = 'Aaaf! Resposta errada tente de novo';
}

buttonSim.onclick = respostaSim;
buttonNao.onclick = respostaNao;
