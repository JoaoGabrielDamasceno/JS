//coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['nome do produto'] = 'Cadeira'
produto.preco = 23

console.log(produto)
delete produto.preco
delete produto['nome de produto']
console.log(produto)

const carro = {
    nome: 'A4',
    preco: 23,
    proprietario: {
        nome: 'João',
        idade: 21,
        endereco: {
            rua: 'João Cechetto',
            numero: 752
        }
    },
    condutores: [{
        nome: 'Heloisa'
    },{
        nome: 'João'
    }],
    calcularSeguro: function(){

    }
}

carro.proprietario.endereco.numero = 777
console.log(carro)