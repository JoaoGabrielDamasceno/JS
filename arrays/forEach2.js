Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++ ){
        callback(this[i], i, this)
    }
}


const apr = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

apr.forEach2(function(nome, indice){ // indice sempre passado como segundo parametro
    console.log(`${indice + 1}- ${nome}`)
})
