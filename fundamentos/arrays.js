//Pode colocar qualquer coisa dentro de um array
//Mas prezar por ter arrays com só um tipo de dados

const valores = [7.7 , 8.9 , 6.3 , 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores [4] = 10
console.log([4])
console.log(valores.length) // quantos elementos no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //tira o ultimo valor
delete valores[0] // tira o dessa posição
console.log(valores)