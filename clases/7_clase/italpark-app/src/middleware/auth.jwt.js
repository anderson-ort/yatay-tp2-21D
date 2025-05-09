import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const authbyToken = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) return res.status(401).json({ error: "No token" });

	console.log(authHeader);

	const [_, token] = authHeader.split(" ");

	console.log(token);

	try {
		const decoded = jwt.verify(token, config.SECRET_KEY);
		req.user = decoded;
		console.log(req.user);

		next();
	} catch (e) {
		return res.status(403).json({ error: "Token invalido" });
	}
};
