function getValorAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getValorAleatorioEntre(-1,10)
    console.log('Opção escolhida' + opcao)

}while(opcao != -1)