const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

//vai imprimir Global por conta do contexto aonde a função 'minhaFunção' foi feita, ele vai procurar
//a variavel valor no local mais externo aonde a função foi declarada