import express from "express"
import { SupabaseRepository } from "./repository/supabase.repository.js"
import { MongoRepository } from "./repository/mongo.repository.js"
import { MysqlRepository } from "./repository/mysql.repository.js"

const PORT = process.env.PORT ?? 3100
const app = express()

app.use(express.json())

app.get("/", async (req, res) => {
    // const { data } = await SupabaseRepository.getAll()

    // const { data } = await MongoRepository.getAll()

    MysqlRepository.getAll((err, data) => {
        if (err) return res.status(500).json({ error: "Error al obtener libros" });
        res.json(data);
    });
})

app.post("/crear-book", async (req, res) => {
    const book = req.body

    console.log(book);

    // const { data } = await SupabaseRepository.createOne(book)
    // const { data } = await MongoRepository.createOne(book)

    MysqlRepository.insert(book, (err, newBook) => {
        if (err) return res.status(500).json({ error: "No se pudo insertar el libro" });
        res.status(201).json(newBook);
    });

    // return res.json({ data })
})


app.listen(
    PORT,
    () => console.log(`Bienvenido a la clase de persiteencia`)

)

