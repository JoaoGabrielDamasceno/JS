const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
//Sincrono (é ruim porque espera o arquivo carregar por inteiro, isso pode ser prejudicial se tiver um arquivo grande)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config =  JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Como é JSON da pra fazer assim
const config =  require('./arquivo.json')
console.log(config.db)

//Ler diretorio
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo...')
    console.log(arquivos)
})

// variavel __dirname é usada para ter o caminho do diretorio atual