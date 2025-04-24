import express from "express";
import { config } from "./config/config.js";
import { UsuarioController } from "./controller/UsuarioController.js";

const DISPLAY_MSG = `🚀 Serving at http://${config.HOST}:${config.PORT}`;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ status: 200, msg: "hello world from ORT" });
});

app.get("/usuarios", UsuarioController.getAll);
app.post("/usuario", UsuarioController.createOne);

// Middleware para manejar rutas no encontradas
app.use((request, response, next) => {
	response.status(404).send("Página no encontrada");
});

app.listen(config.PORT, () => {
	console.log(DISPLAY_MSG);
});
