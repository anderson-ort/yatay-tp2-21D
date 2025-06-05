import app from "./app.js";
import { config } from "./config/config.js";
import mongoConnectionInstance from "./databases/mongoos.database.js";
import { sequelize } from "./databases/mysql.database.js";

const startServer = async () => {
	try {
		// await mongoConnectionInstance.connect();

		await sequelize.sync();
		app.listen(config.SERVER_PORT, () => {
			console.log(
				`Server is up @ http://${config.SERVER_HOST}:${config.SERVER_PORT}`,
			);
		});
	} catch (e) {
		console.error(
			"No se pudo ejecutar el servidor.... llamar al 911",
			e.message,
		);
	}
	// finally {
	// 	await sequelize.close();
	// 	console.log("La applicacion ha cerrado satisfactoriamente");
	// }
};

startServer();
