let form = document.querySelector('#form-aula')

let btnMenos = document.querySelector('.btn-menos')
let btnMais = document.querySelector('.btn-mais')
let textoQtd = document.querySelector('.qtd')
let qtd = textoQtd.textContent
let qtdHidden = document.querySelector('#quantidade')

function aumentar() {
    qtd++
    textoQtd.textContent = qtd
    qtdHidden.value = qtd
}

function diminuir() {
    if (qtd == 1) {
        alert('quantidade minima é 1')
        return
    }
    qtd--
    textoQtd.textContent = qtd
    qtdHidden.value = qtd 
}

btnMais.addEventListener('click', aumentar)
btnMenos.addEventListener('click', diminuir)

let inputNome = document.querySelector('#inputNome')
inputNome.addEventListener('focus', function() {
    console.log('evento focus')
})

inputNome.addEventListener('blur', function() {
    if (this.value.length == 0) {
        document.querySelector('.sucesso-nome').style.display = 'none'
        document.querySelector('.erro-nome').style.display = 'block'
    } else {
        document.querySelector('.erro-nome').style.display = 'none'
        document.querySelector('.sucesso-nome').style.display = 'block'
    }
    
})

inputNome.addEventListener('change', function() {
    console.log('evento change')
})

inputNome.addEventListener('input', function() {
    console.log('evento input')
})

let selectEstado = document.querySelector('.select-custom')
selectEstado.addEventListener('change', function() {
    let selectedIndex = selectEstado.selectedIndex
    let itemSelected = selectEstado.options[selectedIndex]
    console.log(itemSelected.value)
})
    


form.addEventListener('submit', function(event) {
    event.preventDefault()

    let radio = document.querySelector('.radio-custom:checked')
    // console.log(radio.value)

    let aceitePromo = document.querySelectorAll('.aceite-promocoes')
    console.log(aceitePromo)
    aceiteChecados = []

    for (let i = 0; i < aceitePromo.length; i++) {
        if (aceitePromo[i].checked == true) {
            aceiteChecados.push(aceitePromo[i].value)
        }
    }
    //o código abaixo faz a mesma coisa que o for acima de maneira diferente
    // aceitePromo.forEach(value => {
    //     if (value.checked == true) {
    //         aceiteChecados.push(value.value)
    //     }
    // })

    console.log(aceiteChecados)

    let textArea = document.querySelector('#exampleFormControlTextarea1')
    console.log(textArea.value)
    

})