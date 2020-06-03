Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i ++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"Nome": "Borracha", "preco": 3.45}',
    '{"Nome": "Caderno", "preco": 13.90}',
    '{"Nome": "Kit de Lapis", "preco": 41.22}',
    '{"Nome": "Caneta", "preco": 7.58}',
]

function returnPreco(objeto){
    array = JSON.parse(objeto)
    return array.preco
}

const precoApenas = carrinho.map2(returnPreco)
console.log(precoApenas)