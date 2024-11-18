  function criaCartao(categoria, pergunta, resposta) {
        let container = document.getElementById('container')
        let cartao = document.createElement('article')
        cartao.className = 'cartao'

        cartao.innerHTML = `
<div class="cartao__conteudo">
<h3>Curiosidades</h3>
<div class="cartao__conteudo__pergunta">
        <p>Quem foi Leonardo da Vinci??</p>
</div
<div class="cartao__conteudo__resposta">
        <p>Leonardo da Vinci é reconhecido como um dos grandes nomes do período renascentista, uma vez que demonstrou uma enorme versatilidade, sendo um grande intelectual que possuía conhecimentos amplos sobre diversas áreas do conhecimento, mas também ficou reconhecido como um dos maiores artistas da história</p>
</div>
</div>
`

let respostaEstaVisivel = false

function viraCartao(){
    respostaestaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
}

cartao.addEventListener('click', viraCartao)
}