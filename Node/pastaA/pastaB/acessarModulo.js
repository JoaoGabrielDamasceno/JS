const moduloA = require('../../moduloA')
console.log(moduloA.ola)

//const moduloAA =  require('C:\Users\joaog\Desktop\exercicios-js\js\Node\moduloA.js')

const c = require('./pastaC')
console.log(c.ola)

const http = require('http')
http.createServer((req,res) => {
    res.write('Bom Dia')
    res.end()
}).listen(8000) // codigo vai continuar executando

//Arquivo index usado para irmportar outros modulos já que não precisa especificar o nome
//dos modulos, apenas a pasta, ai ele acessa o index