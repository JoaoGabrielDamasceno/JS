// mapear um array para outro array modificados
// Por exemplo string -> inteiro
// Regra os dois vão ter o mesmo tamanho

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e){
    return e*2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e*3

resultado = nums.map(soma10).map(triplo)
console.log(resultado)
