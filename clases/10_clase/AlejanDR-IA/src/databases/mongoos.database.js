import mongoose from "mongoose";
import { config } from "../config/config.js";

class MongoConnection {
	constructor() {
		this.connection = null;
	}

	async connect() {
		if (this.connection) {
			return this.connection;
		}

		try {
			await mongoose.connect(config.MONGO_URI, {
				dbName: "ort-database",
				// useNewUrlParser: true,
				// useUnifiedTopology: true,
			});
			this.connection = mongoose.connection;
			console.log("Mongo atlas DB connected");

			return this.connection;
		} catch (e) {
			console.error("Not able to connect to Mongo atlas");
			throw e;
		}
	}
}

const mongoConnectionInstance = new MongoConnection();
export default mongoConnectionInstance;
