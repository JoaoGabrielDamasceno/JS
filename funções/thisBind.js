const pessoa = {
    saudacoes: 'Ola',
    falar() {
        console.log(this.saudacoes)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()