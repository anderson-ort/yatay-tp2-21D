import express from "express"
import { router } from "./routes/file.router.js"

const app = express()


const PORT = process.env.PORT ?? 3001
const HOST = process.env.HOST ?? "127.0.0.1"


app.get("/file-storage-api", (req, res) => res.json({ status: 200, message: "Api for is running" }))

app.use("/api/v1", router)

app.use((req, res, next) => {
    res.status(404).json({
      error: 'Ruta no encontrada',
      path: req.originalUrl,
      method: req.method,
    });
  });

  
app.listen(PORT, () => console.log(`[APP SERVER 🚀] Listening at http://${HOST}:${PORT}`))
