export const auth = (req, res, next) => {
	const PWD = 123;

	const { credenciales } = req.body;

	if (credenciales !== PWD) {
		res
			.status(404)
			.json({ status: 404, payload: "no coincide las credenciales" });
		return;
	}

	next();
};
