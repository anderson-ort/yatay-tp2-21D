console.log('----> Inicio del programa')

//const fs = require('fs')      // CommonJS
import fs from 'fs'             // ES Modules

/* ------------------------------------------------------------------------------------- */
/*    READ / WRITE FILE SYSTEM FORMA ASINCRÓNICA con Promesas anidadas (No Bloqueante)   */
/* ------------------------------------------------------------------------------------- */
async function readWriteFileASyncPromise() {
    console.log('Comienzo de proceso fs')
    try {
        let datos = await fs.promises.readFile('../datos.txt','utf-8')
        console.log('Read antes:', datos)

        await fs.promises.writeFile('../datos.txt', new Date().toLocaleString())
        console.log('Wr ok')

        datos = await fs.promises.readFile('../datos.txt','utf-8')
        console.log('Read después:', datos)
    }
    catch(error) {
        console.log('Error en lectura/escritura:', error.message)
    }
    console.log('Fin de proceso fs')
}

readWriteFileASyncPromise()

console.log('----> Otras tareas ...')