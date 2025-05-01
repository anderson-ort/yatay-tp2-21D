import { Router } from "express";

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

export { statusRouter };
