// Padrão que consiste em dividir uma função por exemplo que realiza diversos procesos em 
// varias funções que realizam seus respectivos processos de forma separada que se ligam
// por uma função next
// Termo seria (((Cadeia de responsabilidades - uma função chama a outra)))

const passo1 = (contexto, next) => {
    contexto.valor1 = 'ponto1',
    next()
} 

const passo2 = (contexto, next) => {
    contexto.valor2 = 'ponto2',
    next()
} 

const passo3 = (contexto, next) => {
    contexto.valor3 = 'ponto3'
}

// recebo o conjunto de funções e o indice, se ele for menor que o tamanho do conjunto de funções
// 

const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](contexto, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const contexto = {}
exec(contexto, passo1, passo2, passo3)
console.log(contexto)