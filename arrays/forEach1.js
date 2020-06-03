const apr = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

apr.forEach(function(nome, indice){ // indice sempre passado como segundo parametro
    console.log(`${indice + 1}- ${nome}`)
})

const exibirAprovados = apr => console.log(apr)
apr.forEach(exibirAprovados)

// forEach recebe tres paramentros, o terceiro recebe o array completo