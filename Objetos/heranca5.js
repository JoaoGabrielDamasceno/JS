//toda função tem um atributo .prototype

String.prototype.reverse = function(){
    return this.split('').reverse().join('') //split separa, reverse inverte e join junta dnv
}

console.log('João é legal')

Array.prototype.first = function(){
    return  this[0]
}

console.log([1,2,3].first())

//Observação: ter cuidado em alterar comportamentos que já existam
