import { connectDB } from "../db/index.js";
import { Ticket } from "../models/Ticket.js";

const db = await connectDB();
const collection = db.collection("tickets");

export const TicketRepositoryMongo = {
	// Obtener todos los tickets
	async getAll() {
		const results = await collection.find({}).toArray();
		return results.map(
			(doc) => new Ticket(doc.id, doc.userCode, doc.tipoEntrada, doc.expDate),
		);
	},

	// Obtener ticket por ID
	async getById(id) {
		const doc = await collection.findOne({ id });
		return doc
			? new Ticket(doc.id, doc.userCode, doc.tipoEntrada, doc.expDate)
			: null;
	},

	// Crear ticket
	async createOne({ id, userCode, tipoEntrada = "classic", expDate }) {
		const expiration =
			expDate || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
		const ticket = new Ticket(id, userCode, tipoEntrada, expiration);

		await collection.insertOne(ticket);
		return ticket;
	},

	// Eliminar por ID
	async deleteById(id) {
		await collection.deleteOne({ id });
		return { message: "Ticket deleted" };
	},
};
