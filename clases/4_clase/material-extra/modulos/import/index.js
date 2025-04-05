// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import
// import ES Modules

//import operaciones from './api/operaciones.js'      // (1)
//import { div, mod, mult, resta, suma } from './api/operaciones.js'      // (2)
import * as operaciones from './api/operaciones.js'      // (3)

console.log('Inicio de los cálculos')

console.log( operaciones.suma(10,3) )               // (1) (3)
console.log( operaciones.resta(10,3) )
console.log( operaciones.mult(10,3) )
console.log( operaciones.div(10,3) )
console.log( operaciones.mod(10,3) )

/* console.log( suma(10,3) )               // (2)
console.log( resta(10,3) )
console.log( mult(10,3) )
console.log( div(10,3) )
console.log( mod(10,3) ) */

console.log('Fin de los cálculos')
