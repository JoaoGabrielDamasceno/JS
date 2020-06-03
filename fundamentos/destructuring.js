//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa   //chaves apresenta o operador destructor, tire do objetivo tais atributos
console.log(nome,idade)

//console.log(pessoa)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome, bemHumorado = true} = pessoa //seta true com padrão
console.log(sobrenome,bemHumorado)