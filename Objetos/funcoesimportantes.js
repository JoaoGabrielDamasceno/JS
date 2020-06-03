const pessoa = {
    nome: 'Rebeca',
    idade: 15

}

console.log(Object.keys(pessoa)) //ler so as chaves
console.log(Object.values(pessoa)) //ler so os valores
console.log(Object.entries(pessoa)) //ler chave - valores

Object.entries(pessoa).forEach(([chave,valor]) =>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'DataNascimento', {
    enumerable: true, //se pode ser listado
    writable: false, //se pode ser modificado
    value: '01/02/2020' //valor
})

console.log(Object.keys(pessoa))

//Object assign
const dest = {a: 1}
const ob1 = {b: 2}
const ob2 = {c: 3, a: 4}
const obj = Object.assign(dest, ob1, ob2) //junta os objetos
console.log(obj)

Object.freeze(obj)
obj.c = 123
console.log(obj)