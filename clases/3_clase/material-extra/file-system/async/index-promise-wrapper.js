console.log('----> Inicio del programa')

const fs = require('fs')

/* ------------------------------------------------------ */
/*             FUNCIONES Wrapper File System              */
/* ------------------------------------------------------ */
function readFilePromise(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file,'utf-8', (error, datos) => {
            if(error) reject(error)
            else resolve(datos)
        })
    })
}

function writeFilePromise(file, datos) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, datos, error => {
            if(error) reject(error)
            else resolve()
        })
    })
}

/* ------------------------------------------------------------------------------------- */
/*    READ / WRITE FILE SYSTEM FORMA ASINCRÓNICA con Promesas anidadas (No Bloqueante)   */
/* ------------------------------------------------------------------------------------- */
async function readWriteFileASyncPromise() {
    try {
        let datos = await readFilePromise('../datos.txt')
        console.log('Read antes:', datos)

        await writeFilePromise('../datos.txt', new Date().toLocaleString())
        console.log('Wr ok')

        datos = await readFilePromise('../datos.txt')
        console.log('Read después:', datos)
    }
    catch(error) {
        console.log('Error en lectura/escritura:', error.message)
    }
}

readWriteFileASyncPromise()

console.log('----> Otras tareas ...')