import express from "express";
import morgan from "morgan";
import { config } from "./config/config.js";
import { statusRouter } from "./routes/status.route.js";
import { ticketRouter } from "./routes/ticket.router.js";
import { userToken } from "./utils/jwt.token.js";

const app = express();

app.use(express.json());

app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms"),
);

app.get("/login", (req, res) => {
	const LOCAL_USER = {
		name: "Bruce",
		apellido: "Willis",
		password: "clave-segura",
		rol: "actor",
		curso: "NodeJS Backend",
		preferencias: ["oscuro", "UTM-3"],
	};

	const { usuario, pwd } = req.body;

	const { name: USER, password: PWD } = LOCAL_USER;

	const isValid = usuario === USER && pwd === PWD;

	if (!isValid) {
		return res.status(403).json({ error: "usuario no valido" });
	}

	const token = userToken({
		...LOCAL_USER,
		rol: null,
		preferencias: "🐥",
		password: "*******",
		name: "Suscribre",
	});

	return res.status(200).json({ token });
});

app.use("/api", statusRouter);
app.use("/tickets", ticketRouter);

app.listen(config.PORT, () => {
	const message = `🚀 SERVER is UP at http://${config.HOST}:${config.PORT}`;
	console.log(message);
});
