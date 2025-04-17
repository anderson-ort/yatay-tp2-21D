import express from "express"
import path from "path"

const PORT = process.env.PORT ?? "3001" // seleccionado a mi gusto
const HOST = process.env.HOST ?? "127.0.0.1" //ip local
const app = express()

// uno de middleware

app.use(express.json())

/**
 * ESTO ESTA HACIENDO UNA PETICION DEL TIPO GET
*/
app.get('/matispizza', (req, res) => {
    const responseText = `<h1>Hola soy la pizzeria Mati's<h1>`
    res.send(responseText)
})

/**Obtener la pagina web desde un archivo plano del tipo html*/
app.get("/index", (req, res) => {
    const __dirname = import.meta.dirname
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.post("/api/calculo", (req,res) => {
    res.status(200).send(req.body)
})


app.listen(PORT, () => console.log(`[🚀 SERVER AT http://${HOST}:${PORT}]`))

