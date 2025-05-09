import { supabase } from "../databases/postgresql.cnx.js";
import { Ticket } from "../model/ticket.js";

export const TicketRepositorySupaBase = {
	// Obtener todos los tickets
	async getAll() {
		const { data: rows, error } = await supabase.from("tickets").select();

		return rows.map(
			(row) =>
				new Ticket(row.id, row.user_code, row.tipo_entrada, row.exp_date),
		);
	},

	// Obtener un ticket por ID
	async getById(id) {
		const { data: row, error } = await supabase
			.from("tickets")
			.select()
			.eq("user_code", id);



		return row
			? new Ticket(row.id, row.user_code, row.tipo_entrada, row.exp_date)
			: null;
	},

	// // Crear un ticket
	// async createOne({ id, userCode, tipoEntrada = "classic", expDate }) {
	// 	const expiration =
	// 		expDate || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

	// 	const [row] = await sql`
	// 		INSERT INTO tickets (id, user_code, tipo_entrada, exp_date)
	// 		VALUES (${id}, ${userCode}, ${tipoEntrada}, ${expiration})
	// 		RETURNING *
	// 	`;

	// 	return new Ticket(row.id, row.user_code, row.tipo_entrada, row.exp_date);
	// },

	// // Eliminar un ticket por ID
	// async deleteById(id) {
	// 	await sql`DELETE FROM tickets WHERE id = ${id}`;
	// 	return { message: "Ticket deleted" };
	// },
};
