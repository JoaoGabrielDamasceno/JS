function imprimirNomeGritado(obj){
    //throw 10
    try{ //pode gerar um erro
    console.log(obj.name.toUpperCase() + '!!!') //variavel name ta ecrita errada
    } catch (e){ // tratar com catch
        tratarErroElancar(e)
    } finally {
        console.log('final') //executa sempre
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)