// dependencias
// https://www.npmjs.com/package/winston
// https://expressjs.com/
// https://www.npmjs.com/package/cors

import express from "express"
import cors from "cors"


const config = {
    PORT: process.env.PORT ?? 3001,
    HOST: process.env.HOST ?? "127.0.0.8"

}


const corsOptioned = cors({
    origin: "http://${HOST}:${PORT}",
    optionSucessStatus: 200
})

const app = express()

// [ADD] cors
app.use(corsOptioned)

app.get("/chuckjokes", async (request, response) => {
    const data = await fetch("https://api.chucknorris.io/jokes/random")
    const { value } = await data.json()
    response.json(
        {
            status: 200,
            data: [value]
        }
    )
})

app.listen(
    config.PORT,
    () => console.log(`🚀 [ CORS::enabled ] [SERVER is UP] http://${config.HOST}:${config.PORT}`)
)





