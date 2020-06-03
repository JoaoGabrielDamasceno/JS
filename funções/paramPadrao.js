// estrategia 1 para gerar valor padrão
//bem usado
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))

//estrategia 2,3 e 4 para gerar valor padrão
 function soma2(a,b,c){
     a = a !== undefined ? a : 1
     b = 1 in arguments ? b : 1 // o 1 dps do igual varia em relação a posição do argumento na func
     c = isNaN(c) ? 1 : c //se n for um number recebe 1 se não recebe c mesmo
     //opção 3 é interessante
     return a + b + c
 }

 console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))

 function soma3(a=1, b=1, c=1){
     return a + b + c
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))