const pessoa = {
    nome: 'João'
}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)
//a partir de agora não da pra mexer nos atributos,deletar ou criar

const pessoaConstante = Object.freeze({
    nome: 'João'
})