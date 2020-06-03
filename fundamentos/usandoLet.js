var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ' , numero)

//estão em scopo diferente
// se não tiver a variavel que voce ta tentando usar dentro do scopo, ele busca no scopo menos externo
// a ele