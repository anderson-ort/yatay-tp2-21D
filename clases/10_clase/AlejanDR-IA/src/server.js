import app from "./app.js";
import { config } from "./config/config.js";
import mongoConnectionInstance from "./databases/mongoos.database.js";

const startServer = async () => {
    try {
        await mongoConnectionInstance.connect();
        app.listen(config.SERVER_PORT, () => {
            console.log(
                `Server is up @ http://${config.SERVER_HOST}:${config.SERVER_PORT}`,
            );
        });
    } catch (e) {
        console.error(
            "No se pudo ejecutar el servidor.... llamar al 91",
            e.message,
        );
    }
};

startServer();