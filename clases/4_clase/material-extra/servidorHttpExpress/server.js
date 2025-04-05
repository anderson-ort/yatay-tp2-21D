//https://www.npmjs.com/package/express
//https://expressjs.com/
const express = require('express')

const app = express()

// ----------------- Rutas GET --------------------
app.get('/mensaje', (req,res) => {
    res.send('<h1>Hola soy el servidor Http express</h1>')
})

app.get('/fyh', (req,res) => {
    res.send(`<h3>La fecha y hora es ${new Date().toLocaleString()}</h3>`)
})

app.get('*', (req,res) => {
    const { url } = req     // Object destructuring
    res.status(404).send(`<h3 style="color:red;">Error 404 recurso GET ${url} no encontrado</h3>`)
})

// ----------------- Rutas POST --------------------
app.post('*', (req,res) => {
    const { url, method } = req
    res.status(500).send(`<h3 style="color:orangered;">Error 500 ruta ${method} ${url} no implementada</h3>`)
})

// ----------------- Rutas POST --------------------
app.put('*', (req,res) => {
    const { url, method } = req
    res.status(500).send(`<h3 style="color:orangered;">Error 500 ruta ${method} ${url} no implementada</h3>`)
})

// ----------------- Rutas POST --------------------
app.delete('*', (req,res) => {
    const { url, method } = req
    res.status(500).send(`<h3 style="color:orangered;">Error 500 ruta ${method} ${url} no implementada</h3>`)
})


const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor Express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
