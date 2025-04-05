console.log('----> Inicio del programa')

const fs = require('fs')

/* ------------------------------------------------------------------------------------- */
/*   READ / WRITE FILE SYSTEM FORMA ASINCRÓNICA con Callbacks anidados (No Bloqueante)   */
/* ------------------------------------------------------------------------------------- */
function readWriteFileASyncCb() {
    fs.readFile('../datos.txt','utf-8', (error, datos) => {
        if(error) throw Error(`Error en lectura asincrónica: ${error.message}`)
        console.log('Read antes:', datos)

        fs.writeFile('../datos.txt', new Date().toLocaleString(), error => {
            if(error) throw Error(`Error en escritura asincrónica: ${error.message}`)
            console.log('Wr ok')

            fs.readFile('../datos.txt','utf-8', (error, datos) => {
                if(error) throw Error(`Error en lectura asincrónica: ${error.message}`)
                console.log('Read después:', datos)
            })
        })
    })
}

readWriteFileASyncCb()

console.log('----> Otras tareas ...')