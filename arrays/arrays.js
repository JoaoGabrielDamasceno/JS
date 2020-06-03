let aprovados = new Array('Carlos', 'Bia')
console.log(aprovados)

aprovados = ['Bia', 'Carlos']
console.log(aprovados[0])

aprovados.push('Paulo')
console.log(aprovados.length)
aprovados.sort() // ordena
console.log(aprovados)

//delete aprovados[0]
console.log(aprovados)
aprovados.splice(1,2) // a partir do indice um ele deleta dois elementos
aprovados.splice(1,0, 'João', 'Ana') // a partir do indice 1 deleta 0 eleemntos e adiciona os dois
console.log(aprovados)
aprovados.sort()
console.log(aprovados)