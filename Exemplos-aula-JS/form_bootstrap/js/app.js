// inicio validacao cpf
let regexCnpjCpf = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/
let inputCnpjCpf = document.querySelector('#cnpj-cpf')
let msgCnpjCpf = document.querySelector('.msg-cnpf-cpf')

inputCnpjCpf.addEventListener('blur', function() {
    let resultadoValidacao = regexCnpjCpf.test(inputCnpjCpf.value)
    if (resultadoValidacao) {
        msgCnpjCpf.style.display = 'none'
    } else {
        msgCnpjCpf.style.display = 'block'
    }
})

// fim validacao cpf

// inicio validacao nome
let regexNome = /[A-Z][a-z]* [A-Z][a-z]*/
let inputNome = document.querySelector('#nome')
let msgNome = document.querySelector('.msg-nome')

inputNome.addEventListener('blur', function() {
    let resultadoValidacao = regexNome.test(inputNome.value)
    if (resultadoValidacao) {
        msgNome.style.display = 'none'
    } else {
        msgNome.style.display = 'block'
    }
})

// fim validacao nome

// inicio estados/select
let selectEstados = document.querySelector('#estados')
let msgEstado = document.querySelector('.msg-estado')

selectEstados.addEventListener('change', function() {
    let itemSelecinado = selectEstados.options[selectEstados.selectedIndex]

    if (itemSelecinado.value == "") {
        msgEstado.style.display = 'block'
    } else {
        msgEstado.style.display = 'none'
    }
})

// fim estados/select