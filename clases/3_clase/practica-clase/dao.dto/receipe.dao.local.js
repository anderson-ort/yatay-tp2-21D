// esta capa basicamente les permite manejar el CRUD, en nuestro caso la lectura y escritura del archivo json


import fs from "fs/promises"


const readData = async (config) => {
    try {

        console.log(`🚀 Leyendo los datos desde el archivo: ${config.JSON.PATH}`);

        const data = await fs.readFile(config.JSON.PATH, 'utf8')
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}


const writeData = async (config, data) => {
    console.log(`🚀 Escribiendo los datos al archivo: ${config.JSON.PATH}`);
    await fs.writeFile(config.JSON.PATH, JSON.stringify(data, null, 2))
}

export { readData, writeData }