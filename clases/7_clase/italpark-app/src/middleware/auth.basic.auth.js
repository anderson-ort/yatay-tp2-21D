import basicAuth from "basic-auth";

const userAdmin = {
	level: ["admin", "manager"],
	pwd: "7164e33055faa6ecddefd9e08fc59f5d",
};

export const auth = (req, res, next) => {
	const user = basicAuth(req);

	console.log(user);

	const validUser =
		user && userAdmin.level.includes(user.name) && user.pass === userAdmin.pwd;

	if (!validUser) {
		return res.status(401).json({
			msg: "Chango no tenes ni permisos ni se quien sos",
		});
	}

	next();
};
