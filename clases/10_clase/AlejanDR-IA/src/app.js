import express from "express";
import morgan from "morgan";
import { config } from "./config/config.js";
import mongoConnectionInstance from "./databases/mongoos.database.js";
import UserRouter from "./routers/user.router.js";

const app = express();
app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms"),
);
app.use(express.json());

app.use("/api/user", UserRouter);


export default app;
