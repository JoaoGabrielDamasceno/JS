var numero = 1

{
    var numero = 2
    console.log(numero)


}

console.log(numero)

//variavel var naõ tem escopo diferente em blocos, ela é global, só tem escopo em funções

{{{{ var sera = `Sera???`}}}}

console.log(sera)

function teste(){
    var local = 23
}

teste()
// nao consegue porque variavel esta dentro da funcao, so é visível dentro da função
//se declara fora da funcao ela e global(window)
//evitar que va para o escopo global, porque pode ser sobescrita depois no programa por outra pessoa
//console.log(local)


var numero = 1
{
    var numero = 2
    console.log(`dentro = `, numero)
}
console.log(`fora = `, numero)

// isso não acontece com (((let))
