const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.contador()
contadorA.contador()
console.log(contadorA.id, contadorB.id)

contadorC.contador()
contadorC.contador()
console.log(contadorC.id, contadorD.id)