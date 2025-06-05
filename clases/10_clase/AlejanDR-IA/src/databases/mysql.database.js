import { Sequelize } from "sequelize";
import { config } from "../config/config.js";

export const sequelize = new Sequelize(
	config.MYSQL_DATABASE,
	config.MYSQL_USER,
	config.MYSQL_PASSWORD,
	{
		dialect: "mysql",
		host: config.MYSQL_HOST,
		port: config.MYSQL_PORT,
	},
);
