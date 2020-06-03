//requisição em cima dessa url e receber o conteúdo do arquivo
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
 

const paisChina = funcionarios => funcionarios.pais === 'China'
const generoF = funcionarios => funcionarios.genero === 'F'
const menorSalario = (fun, funAtual) => {
    return fun.salario < funAtual.salario ? fun : funAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data // data é aonde ta os dados
    
    const chinaMenor = funcionarios
    .filter(paisChina)
    .filter(generoF)
    .reduce(menorSalario)
    console.log('Oi')
    console.log(chinaMenor)
})

// Filter() para filtrar o array e reduce para obter o elemento desejado

// Detalhe para script que foi alterar o package.json
// mudar a variavel main para o nome do arquivo usado, no caso funcionario
// start para nodemon
// dev para nodemon
// tem que rodar npm i pra criar as pastas dnv
// para rodar no terminal tem que colocar "npm nodemon"
// e ai da pra salvar o arquivo que ele da refresh na execução