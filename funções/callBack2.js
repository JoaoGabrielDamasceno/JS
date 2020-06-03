const notas = [5.5, 4.7, 7.0, 5.0, 9.0, 8.8]

const notasBaixas = []
for(let i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

const notasBaixas2 = notas.filter(function (notas){
    return notas < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(notasBaixas3)