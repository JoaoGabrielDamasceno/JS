const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = peso1*avaliacao1 + peso2*avaliacao2
const media = total/(peso1 + peso2)
console.log(peso1)
console.log(media.toFixed(5))
console.log(media.toString()) // trasnforma em string
console.log(media.toString(2)) // transforma em binario
console.log(typeof media) // mostra que é number, ou seja, number tem varias funções associadas 
