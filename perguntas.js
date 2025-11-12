criaCartao(Progamação, Oque é Python?, O Python é uma linguagem de programação)
criaCartao('Geografia',
     'Qual a capital da frança?',
    'A capital da frança é Paris'
)

criaCartao('Programação',
    'O que é uma Função?',
    'uma função é um bloco de codigo que executa alguma tarefa'
)criaCartao('lingua inglesa'), 'como se diz oi em ingles?'
'Oi em ingles é hi (RAI)'
let repostaEstaVisivel = false

Function viraCartão(){
respostaEstaVisivel = !respostaEstaVisivel
cartao.classList.toggle('active',respostaEstaVisivel)}
cartao.addEventlistener('click',viraCartão)
CSSContainerRule.appendChild(cartao)
}