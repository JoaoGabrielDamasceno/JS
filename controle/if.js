function soBoaNota(nota) {
if(nota>=7){
    console.log('Aprovado com ' + nota)
}
}

soBoaNota(7.1)
soBoaNota(6)

function seForVerdadeEuFalo(valor){
    if(valor!=null){
        console.log('É verdade... '+ valor)
    }

}

seForVerdadeEuFalo(null)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])




