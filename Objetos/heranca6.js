function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
console.log(aula1)

/* O operador 'new' ele cria um objeto, seta o prototype para o da função,
   ele adiciona os paramentros no objeto e retorna o objeto
*/ 
