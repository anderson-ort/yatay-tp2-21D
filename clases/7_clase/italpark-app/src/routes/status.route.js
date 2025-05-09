import { Router } from "express";
import fs from "fs/promises";
import { auth } from "../middleware/auth.credencial.status.js";

const statusRouter = Router();

statusRouter.get("/v01/status", (req, res) => {
	res.json({
		status: 200,
		timestatus: new Date().toISOString(),
		message: "Bienvenidos al italpark",
	});
});

statusRouter.get("/v02/status", (req, res) => {
	res.json({
		status: 200,
		timestatus: new Date().toISOString(),
		message: "Bienvenidos al italpark",
		location: "34°35′8″S 58°23′10″W",
	});
});

statusRouter.post("/v02/create-status", auth, (req, res) => {
	const { nombre } = req.body;

	const file_name = "archivo_guardado.txt";
	fs.writeFile("archivo_guardado.txt", JSON.stringify(nombre));

	res.json({
		status: 202,
		payload: file_name,
	});
});

export { statusRouter };
