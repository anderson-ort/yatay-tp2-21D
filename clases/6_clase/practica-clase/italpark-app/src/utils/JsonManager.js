import fs from "node:fs/promises";
import { config } from "../../config/config.js";

const { DB_PATH } = config;

export const JsonHandler = {
	async read() {
		try {
			const data = await fs.readFile(DB_PATH, { encoding: "utf8" });
			return JSON.parse(data || []);
		} catch (error) {
			(error) => console.log({ error });
		}
	},

	async write(data) {
		try {
			const strData = JSON.stringify(data, null, 2);
			await fs.writeFile(DB_PATH, strData, { encoding: "utf8" });
		} catch (error) {
			console.log({ error });
		}
	},
};
