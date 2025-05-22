import { MongoClient } from "mongodb";
import { config } from "../config/config.js";

let dbInstance = null;

async function mongoConnnection() {
    // despues vemos este patro
    if (dbInstance) return dbInstance;

    const client = new MongoClient(config.MONGO_URI);

    try {
        await client.connect();
        dbInstance = client.db("ort-database"); // nombre de la base
        console.log("✅ MongoDB connected");
        return dbInstance;
    } catch (err) {
        console.error("❌ Error connecting to MongoDB:", err);
        throw err;
    }
}


export const mongoDb = await mongoConnnection()