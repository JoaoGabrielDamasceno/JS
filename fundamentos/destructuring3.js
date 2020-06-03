function rand( { min = 0, max = 1000} ){ //definindo valor padrão
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({}))
console.log(rand()) // da problema pois nenhum obejto está sendo passado