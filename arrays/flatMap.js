// map com concat
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const escola = [{
    nome:'Turma 1',
    alunos: [
        {
            nome: 'João',
            nota: 9
        },
        {
            nome: 'Bianca',
            nota: 8
        }
    ]
},
{
    nome:'Turma 2',
    alunos: [
        {
            nome: 'Julio',
            nota: 5
        },
        {
            nome: 'Julia',
            nota: 6
        }
    ]
},
]

const getNota = alunos => alunos.nota
const notas = escola => escola.alunos.map(getNota)

const notas2 = escola.flatMap(notas)
console.log(notas2)