const pai = { nome: 'Joao', corDoCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corDoCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Roberta', writable: false, enumerable: true}
})
console.log(`${filha2.nome} tem cabelo ${filha2.corDoCabelo}`)

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança ${key}`)
}