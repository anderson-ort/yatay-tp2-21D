console.log('----> Inicio del programa')

const fs = require('fs')

/* ------------------------------------------------------------------ */
/*       READ / WRITE FILE SYSTEM FORMA SINCRÓNICA (Bloqueante)       */
/* ------------------------------------------------------------------ */
function readWriteFileSync() {
    try {
        let datos = fs.readFileSync('../datos.txt','utf-8')//.toString()
        console.log('Read antes:', datos)

        fs.writeFileSync('../datos.txt', new Date().toLocaleString())
        console.log('Wr ok')

        datos = fs.readFileSync('../datos.txt','utf-8')//.toString()
        console.log('Read después:', datos)
    }
    catch(error) {
        console.log(`Error en operación sicrónica de lectura/escritura: ${error.message}`)
    }
}

readWriteFileSync()

console.log('----> Otras tareas ...')