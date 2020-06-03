const escola = 'Cod3r'

console.log(escola.charAt(4)) //saber o que está na posição 4
console.log(escola.charAt(5)) //Não tem posição 5, print nada
console.log(escola.charCodeAt(3)) // Codigo Anade do 3
console.log(escola.indexOf('3')) //Saber onde ta o 3

console.log(escola.substring(1)) // substring começando de 1
console.log(escola.substring(0,3)) // substring começando de 0 e indo até 2

console.log('Escola '.concat(escola).concat("!")) // concatena 
console.log(escola.replace(3, 'e')) // troca letra

console.log('Ana,Maria,Pedro'.split(',')) // separa a string dividida por virgula em um vetor