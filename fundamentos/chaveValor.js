// par nome/valor

const saudacao = 'Opa' //constexto lexico 1

function exec(){
    const saudacao = 'Falaaa' //constexto lexico 2
    return saudacao
}

//constextos diferentes
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 172 
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)