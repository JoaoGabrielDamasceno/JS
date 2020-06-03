Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for(let i = 1; i< this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }

    return acumulador
}


const alunos = [
    {nome: 'João', nota: 7.5, bolsista: false},
    {nome: 'Bianca', nota: 8.5, bolsista : true},
    {nome: 'Lucas', nota: 7.54, bolsista: false},
    {nome: 'Barth', nota: 6.1, bolsista: true}
]

const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce2(todosBolsistas))