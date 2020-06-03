//todos objetos criados apartir de uma mesma função construtora apontam o __proto__ para o mesmo objeto
function MeuObjeto(){}
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function(){
    console.log('Bom dia meu nome é ' + this.nome)
}

obj1.falar()

obj2.nome = 'João'
obj2.falar()

console.log(Object.prototype.__proto__ === null) //não é igual a undefined, o atributo existe
