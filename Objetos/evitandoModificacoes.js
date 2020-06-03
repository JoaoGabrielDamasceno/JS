// Object.preventExtensions -- não é permitido adicionar novos atribitus mas pode excluir
// e modificar
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 2.55
})

console.log('Extensível:', Object.isExtensible(produto))

// Object.seal -- não adiciona nem exclui mas pode modificar

const pessoa = { nome: 'Ana', idade: 18}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

//Object.freeze -- não adiciona, não exclui e não modifica
