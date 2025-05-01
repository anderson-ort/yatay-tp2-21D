import { JsonHandler } from "../utils/JsonManager.js";

export const TicketRepository = {
	getById: async (id) => {
		const tickets = await JsonHandler.read();

		if (!tickets) return null;

		const ticket = tickets.find((ticket) => ticket.codUser === id);

		if (!ticket) return null;

		return ticket;
	},

	createOne: async (ticket) => {
		const tickets = await JsonHandler.read();
		tickets.push(ticket);
		try {
			await JsonHandler.write(tickets);
		} catch (e) {
			console.error({ message: e.message });
		}
	},
	deleteById: async (id) => {
		const tickets = await JsonHandler.read();
		if (!tickets) return null;

		const index = tickets.find((ticket) => ticket.id === id);

		if (!index) return;

		const ticketsResponse = tickets.filter((ticket) => ticket.id !== id);

		try {
			await JsonHandler.write(ticketsResponse);
			return id;
		} catch (e) {
			return null;
		}
	},

	updateByUserCode: async (userCode, semanasPlus) => {
		const tickets = await JsonHandler.read();
		const ticketsResponse = tickets.filter(
			(ticket) => ticket.userCode === userCode,
		);
		const ticketsOld = tickets.filter((ticket) => ticket.userCode !== userCode);
		const newExpDate = new Date(
			new Date().getDate() + 7 * 24 * 60 * 60 * 1000 * semanasPlus,
		);
		const modifiedTickets = ticketsResponse.map((ticket) => ({
			...ticket,
			expDate: newExpDate,
		}));
		try {
			await JsonHandler.write([...ticketsOld, ...modifiedTickets]);
			return modifiedTickets;
		} catch (e) {
			return null;
		}
	},

	getAll: async () => await JsonHandler.read(),
};
