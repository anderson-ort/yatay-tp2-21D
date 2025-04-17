import path from "path"

import express from "express"

import { getPedidos, getPizzas, postPedidos } from "./service.js"


const __dirname = import.meta.dirname
const PORT = process.env.PORT ?? 3002
const HOST = process.env.HOST ?? "127.0.0.1"


const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "ola k ase" })
})


app.get("/pizzas", async (req, res) => {
    const url = path.join(__dirname, "../db/pizzas.list.json")
    const pizzas = await getPizzas(url)
    res.json(pizzas)

})

app.post("/addPedido", async (req, res) => {

    const { nombreDePizza, ...pedido } = req.body

    const url = path.join(__dirname, "../db/pizzas.list.json")
    const pizzas = await getPedidos(url)

    const pedidoBase = pizzas.map(p => p.nombreDePizza != nombreDePizza)
    const pizza = pizzas.filter(p => p.nombreDePizza === nombreDePizza)


    pizza[0].pedidos.push(pedido)
    pedidoBase.push(pizza)

    console.log(pedidoBase);
    
    await postPedidos(url, pedidoBase)

    res.json({ pizza })

})

app.listen(PORT, () => console.log(`🪄[App is Listening @ http://${HOST}:${PORT}]`)
)