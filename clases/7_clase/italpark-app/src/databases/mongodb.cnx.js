import { MongoClient } from "mongodb";
import { MONGODB_DATABASE_URL } from "../config/mongo_atlas.config.js";

let dbInstance = null;

export async function connectDB() {
	// despues vemos este patro
	if (dbInstance) return dbInstance;

	const uri = process.env.MONGODB_URI;
	const client = new MongoClient(uri);

	try {
		await client.connect();
		dbInstance = client.db(MONGODB_DATABASE_URL); // nombre de la base
		console.log("✅ MongoDB connected");
		return dbInstance;
	} catch (err) {
		console.error("❌ Error connecting to MongoDB:", err);
		throw err;
	}
}
