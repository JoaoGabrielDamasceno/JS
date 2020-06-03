// transformar um array em "único elemento"
// recebe dois primeiro elementos de um vetor e passa pra proxima, percorrendo o array assim

const aluno = [
    {nome: 'João', nota: 7.5},
    {nome: 'Bianca', nota: 8.5},
    {nome: 'Lucas', nota: 7.54},
    {nome: 'Barth', nota: 6.1}
]

const resultado = aluno.map(a => a.nota).reduce(function(acumulado,atual){
    console.log(acumulado,atual)
    return acumulado + atual
})

// reduce recebe como parametro o valor acumulado, o valor que ta pegando 'agora',
// posição do array e o array
