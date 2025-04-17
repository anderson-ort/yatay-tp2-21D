import { readFile, writeFile } from "node:fs/promises"


const cleanPizzaList = (pizzas) => pizzas.map(pizza => ({ nombre: pizza.nombreDePizza, queLleva: pizza.ingredientes }))


const getPizzas = async (path) => {
    const pizzas = await readFile(path, { encoding: "utf8" })
    const pizzaJson = JSON.parse(pizzas)
    const listaPizzas = cleanPizzaList(pizzaJson)

    return listaPizzas
}


const getPedidos = async (path) => {
    const pizzas = await readFile(path, { encoding: "utf8" })
    const pizzaJson = JSON.parse(pizzas)
    return pizzaJson
}


const postPedidos = async (path, pedidos) => {

    const pedidosString = JSON.stringify(pedidos, null, 2)
    const pizzas = await writeFile(path, pedidos, { encoding: "utf8" })

}



export { getPizzas, getPedidos, postPedidos }