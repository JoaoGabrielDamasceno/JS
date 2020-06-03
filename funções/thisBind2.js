function Pessoa(){
    this.idade = 0
    const self = this //geralmente se dá o nome de self mas pode ser qualquer nome
    setInterval(function(){
        self.idade++ //antes tava this.self
        console.log(self.idade) //antes tava this.idade
    }/*.bind(this)*/, 1000) //faz a cada 1000 milisegundos
}

new Pessoa