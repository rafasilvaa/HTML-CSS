let regexmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let inputmail = document.querySelector('#email')
let msgmail = document.querySelector('.msg-email')


inputmail.addEventListener('blur', function(){


 let resultadomail = regexmail.test(inputmail.value)

if(resultadomail){
    msgmail.style.display = 'none'
}else
    msgmail.style.display = 'block'
})



let regexsenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
let inputsenha = document.querySelector('#senha')
let msgsenha = document.querySelector('.msg-senha')

inputsenha.addEventListener('blur', function(){

resultadosenha = regexsenha.test(inputsenha.value)

if(resultadosenha){

msgsenha.style.display = 'none'

}else

msgsenha.style.display = 'block'
})




let regexcpf = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/
let inputcpf = document.querySelector('#cpf')
let msgcpf = document.querySelector('.msg-cpf')

inputcpf.addEventListener('blur', function(){

let resultadocpf = regexcpf.test(inputcpf.value)

if(resultadocpf){

msgcpf.style.display = 'none'

}else

msgcpf.style.display = 'block'

})



















































// let regexsenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
// let inputsenha = document.querySelector('#senha')
// let msgsenha = document.querySelector('.msg-senha')


// inputsenha.addEventListener('blur', function(){


// let resultadosenha = regexsenha.test(inputsenha.value)

// if(resultadosenha){

//     msgsenha.style.display = 'none'
    
// }else {

//     msgsenha.style.display = 'block'



// }



// })

























// let regexemail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// let inputemail = document.querySelector('#email')
// let msgemail = document.querySelector('.msg-email')


// inputemail.addEventListener('blur', function(){

//     let resultadoValidacao = regexemail.test(inputemail.value)
//     if(resultadoValidacao){
//         msgemail.style.display = 'none'
//     }else{
//         msgemail.style.display = 'block'
//     }

// })