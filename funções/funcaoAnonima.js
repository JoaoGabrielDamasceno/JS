const soma = function(a,b){
    return(a + b)
}

const ImprimiResultado = function(a,b, operacao = soma){
    console.log(operacao(a,b))
}

ImprimiResultado(3,4)
ImprimiResultado(3,4, function (x,y){
    return x - y
})
ImprimiResultado(3,4,(x,y) => x*y)
