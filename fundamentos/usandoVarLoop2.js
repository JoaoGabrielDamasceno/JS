var funcs = []

for(var i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// da merda porque var nao tem scopo de funcao, etnao da 10 nos dois