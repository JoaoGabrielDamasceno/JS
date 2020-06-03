const nomes = ['Joao', 'Ana', 'Bia', 'Matheus'] // não pode adicionar nada
nomes.pop() // remove o ultimo elemento
console.log(nomes)

nomes.push('Gabi') // coloca na ultima posição
console.log(nomes)

nomes.shift() // remove o primeiro
console.log(nomes)

nomes.unshift('Fabio') // adiciona na primeira
console.log(nomes)

nomes.splice(2,0,'Eliane', 'Helos') // adiciona dois a partir da segunda posição
console.log(nomes)

nomes.splice(3,1) // tirou um depois do terceiro
console.log(nomes)

const algunsNomes = nomes.slice(2) // novo array a partir do indice dois, o indice passado entra
console.log(algunsNomes)

const algunsNomes2 = nomes.slice(1,4) // pega a partir de 1 mas não inclui o 4
console.log(algunsNomes2)

console.log(nomes)

// slice != splice