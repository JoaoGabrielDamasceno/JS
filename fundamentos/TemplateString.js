// Template string é para usar algo "interpretável dentro de uma string atraves de $"

const nome = 'Rebeca'

const concatena =  'Olá ' + nome + '!'

const template = `
        Olá
        ${nome}
        !`

console.log(concatena, template)

console.log(`1 + 1 =" ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`${up('cuidado')}!`)
