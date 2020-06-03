const aluno = [
    {nome: 'João', nota: 7.5, bolsista: false},
    {nome: 'Bianca', nota: 8.5, bolsista : true},
    {nome: 'Lucas', nota: 7.54, bolsista: false},
    {nome: 'Barth', nota: 6.1, bolsista: true}
]


/*
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
*/

const todosBolsitas = aluno.map(a => a.bolsista).reduce(function(acumulado,atual){
    return acumulado && atual
})
console.log(todosBolsitas)



const algumBolsitas = aluno.map(a => a.bolsista).reduce(function(acumulado,atual){
    return acumulado || atual
})
console.log(algumBolsitas)
