const fs = require('fs')

const produto = {
    nome: 'Cadeira',
    preco: 14.99
}

fs.writeFile(__dirname + '/arquivoGeradoEscrita.json', JSON.stringify(produto), err =>{
    return(err || 'Deu tudo certo!')
})