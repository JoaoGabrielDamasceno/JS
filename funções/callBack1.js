//Função chamada de volta quando acontece algo

const fabricantes = ['BMW', 'Ford', 'Audi']

const imprimiFabricante = function(nome,indice){
    console.log(`${indice + 1}, ${nome}`)
}

fabricantes.forEach(imprimiFabricante)
fabricantes.forEach(fabricantes => console.log(fabricantes))