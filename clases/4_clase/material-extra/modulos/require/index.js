// https://nodejs.org/api/modules.html
// import Commonjs
const operaciones = require('./api/operaciones')

console.log('Inicio de los cálculos')

console.log( operaciones.suma(10,3) )
console.log( operaciones.resta(10,3) )
console.log( operaciones.mult(10,3) )
console.log( operaciones.div(10,3) )
console.log( operaciones.mod(10,3) )


console.log('Fin de los cálculos')
