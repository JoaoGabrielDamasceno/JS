require('./global')
console.log(MinhaApp.saudacoes())

//pode mudar variaveis (perigoso)
MinhaApp.ola = 'Xiu'
console.log(MinhaApp.saudacoes())


//para imutar ele MinhaApp = Object.freeze {}