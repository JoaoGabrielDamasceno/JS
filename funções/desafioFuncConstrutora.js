class Person{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Person('João')
p1.falar()


function Pessoa(nome){
    this.nome = nome

  
    this.falar = function(){
            console.log('Meu nome é ' + nome)
        }
    }

    const p2 = new Pessoa('Ana')
    p2.falar()