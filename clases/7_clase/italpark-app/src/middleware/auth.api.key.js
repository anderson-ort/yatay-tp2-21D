const APIKEY = Buffer.from("super-secreto-shhhh").toString("base64");

const compare = (password) =>
	Buffer.from(password).toString("base64") == APIKEY;

export const authAPIKEY = (req, res, next) => {
	const key = req.headers["x-api-key"] || req.query.api_key;

	if (!compare(key)) {
		res
			.status(403)
			.json({ error: "Acceso denegado", msg: "tu apikey no es valida" });
	}

	next();
};
