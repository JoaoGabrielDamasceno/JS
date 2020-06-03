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

const precoApenas = carrinho.map(returnPreco)
console.log(precoApenas)