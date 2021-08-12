//array de objetos
let produtos = [
    {
        nome: 'prod1',
        preco: '12,99',
        marca: 'nestle',
        qtd: '5'
    },
    {
        nome: 'prod2',
        preco: '20,99',
        marca: 'nestle',
        qtd: '3'
    },
    {
        nome: 'prod3',
        preco: '50,00',
        marca: 'whey',
        qtd: '10'
    }
]

let filtro = produtos.filter(function(produto){
    return produto.marca == 'nestle'
})

console.log(filtro)

// produtos.forEach(function(produto){
//     console.log(produto.nome, produto.preco)
// })


//objetos
// let carro = {
//     marca: 'Ford',
//     modelo: 'Fusion',
//     quilometragem: 23000,
//     cor: 'preto',
//     opcionais: {
//         ar: true,
//         vidroEle: true,
//         travaEle: true,
//         radio: false
//     },
//     donos: ['Jonas', 'Ivo', 'Léo'],
//     ligar: function() {
//         console.log('vrooommmmm')
//     },
//     acelerar: function(motorista) {
//         this.marca = 'Chevrolet'
//         console.log(`${motorista} está acelerando`)
//     }
// }

// //acessar
// console.log(carro.modelo)
// console.log(carro.cor)
// console.log(carro.opcionais.radio)

// //modificar 
// carro.cor = "prata"

// //adicionar
// carro.velocidadeMax = 200

// //deletar
// delete carro.quilometragem

// carro.ligar()
// carro.acelerar("Jonas")

// console.log(carro)
//funções arrays
//filter
// let marcasProdutos = ['dell', 'philips', 'multilaser', 'dell', 'razer', 'logitech', 'philips', 'dell']
// let produtosFiltradoMarca = marcasProdutos.filter(function(valor) {
//     return valor == 'natura'
// })

// console.log(marcasProdutos)
// console.log(produtosFiltradoMarca)

// let numeros  = [2, 9, 15, 45, 40]
// let fitroNumeros = numeros.filter(function(valor) {
//     //numeros impares
//     return valor % 2 == 1
// })

// console.log(numeros)
// console.log(fitroNumeros)

//map
// let nomes = ["Ivo", "Léo", "Andeia"]
// let nomesSobrenome = nomes.map(function(valor) {
//     return `${valor} Silva`
// })

// console.log(nomesSobrenome)

// //elevacao de escopo
// funcaoNormal()
// funcaoSemNome()

// let funcaoSemNome = function() {
//     console.log("funcaoSemNome")
// }

// function funcaoNormal() {
//     console.log("funcaoNormal")
// }

// let numeros = [1, 5, 7]
// numeros.push(15)
// let dobro = numeros.map(function(valor) {
//     return valor + 2
// })


// console.log(numeros)
// console.log(dobro)


//foreach
// let nomes = ["Ivo", "Léo", "Nayara", "William"]

// nomes.forEach(function(valor, indice) {

//     console.log("posicao: " + (indice + 1)+ "º" + " candidato: " + valor)
//     console.log(`posicao: ${indice +1}º candidato: ${valor}`)
// })


// let array = [1, 5, 7]

// array.forEach(function(valor, indice) {
//     console.log("valor: " + valor + " indice: " + indice)
    // console.log("alguma coisa")
// })

// for (let i = 0; i < array.length; i++) {
//     console.log(i, array[i])
// }

//callback
// function a(param1, param2){
//     console.log('a vem primeiro')
//     param1()
//     console.log('depois')
//     param2()
// }

// function b() {
//     console.log("b vem depois")
// }

// function c() {
//     console.log("c vem depois")
// }

// function d() {
//     console.log("d vem depois")
// }

// a(d, c)



// function circunferencia (raio) {
//     function diametro() { // função aninhada 
//       return 2*raio;   // raio é uma variável da função pai
//      }
  
//     return Math.PI * diametro(); // invocamos a função
// }

// console.log(circunferencia(3))

// function Produto(a, b) {
//     console.log(a * b)
// }

// let produto = function(a, b) {
//     console.log(a * b)
// }

// //arrow functions com mais de um parametro
// let produto = (a, b) => {
//     console.log(a * b)
// }

// //com um parametro
// let produto = a => {
//     console.log(a)
// }

// //sem nenhum parametro
// let produto = () => {
//     console.log("alguma coisa")
// }

// //com parametro e com o return implicito
// let produto = param => console.log(param)

// produto("teste")
// produto(5, 6)
// produto(1, 2)
// produto(4, 6)



