// Criar uma página HTML vazia com a estrutura básica (html, head e body)

// OK


// Adicionar um botão ao html com a legenda “Cumprimentar” que, aoser clicado (onclick) mostre um alerta que diga “olá”

let cumprimentar = document.querySelector('#botao1')

function auxiliar(){

    alert('ola mundo')

}

cumprimentar.addEventListener('click', auxiliar)

// Adicionar outro botão ao html com a legenda “Alterar Fundo” que, quando clicado (onclick) troque a cor do fundo do body para verde.

let troca_fundo = document.querySelector('#botao2')
// let fundo = document.querySelector('body')

function alteracao(){

    fundo.style.backgroundColor = 'green'


}

troca_fundo.addEventListener('click', alteracao)

// Adicionar à página uma imagem que, ao passar do mouse em cima dela, imprima na linha de comando (console) (“estou vendo a imagem”);

let passar_mouse = document.querySelector('#imagem1')


function ver_mensagem(){

    console.log('estou vendo a imagem')
}

passar_mouse.addEventListener('mouseover', ver_mensagem)

//Adicionar outra imagem à página que, quando clicada, utilizando addEventListener, imprima na linha de comando (“estou clicando naimagem”).

let clicar_mouse = document.querySelector('#imagem2')

function clicou(){

    console.log('Estou clicando na imagem')

}
clicar_mouse.addEventListener('click', clicou)


//Definir um addEventListener de forma que, quando o usuário clicar em qualquer parte do body da página, a cor de fundo do body todo mude para vermelho. Para isso, usar o this da função do evento.



let clicar_body = document.querySelector('body')

function mudar_cor_fundo(){


    clicar_body.style.backgroundColor = 'red'
    console.log(this)
}

clicar_body.addEventListener('click', mudar_cor_fundo)



//O usuário é meio chato e, agora, pediu para remover o listener que criamos recentemente, já que ele não consegue interagir bem com a página.


clicar_body.removeEventListener('click', mudar_cor_fundo)

//Criar um formulário básico com um action que redirecione para www.google.com.br. Usando JavaScript, fazer com que, quando o usuário clicar em Enviar, o formulário não seja enviado, mas sim que seja exibido um alert dizendo “Não é possível enviar”

document.querySelector('form').addEventListener('click', 

    function(barrar){

    barrar.preventDefault(); 
    alert('nao é possivel enviar')
})




document.querySelector('#imagem3').addEventListener('click', function(event){event.clientX;event.clientY;})


