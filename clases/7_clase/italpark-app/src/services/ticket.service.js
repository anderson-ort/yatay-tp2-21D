import { Ticket } from "../model/ticket.js";
import { TicketRepository } from "../repository/ticket.repository.js";
import { TicketRepositorySupaBase } from "../repository/ticket.supabase.repository.js";

export const TicketService = {
	serviceTicketValidation: (id) => {
		// const codigoUser = TicketRepository.getById(id);
		const codigoUser = TicketRepositorySupaBase.getById(id);

		if (!codigoUser) return null;

		return codigoUser;
	},

	serviceTicketCreation: (ticket) => {
		const dataTicket = {
			...ticket,
			id: crypto.randomUUID().toString(),
		};

		const modelTicket = new Ticket(dataTicket.id, dataTicket.userCode);

		TicketRepository.createOne(modelTicket);

		return modelTicket;
	},
	serviceTicketDelete: (id) => {
		const idTicket = TicketRepository.deleteById(id);
		if (!idTicket) return null;
		return idTicket;
	},
	serviceUpdateTicket: (userCode, semanasPlus) => {
		const tickets = TicketRepository.updateByUserCode(userCode, semanasPlus);
		if (!tickets) return null;

		return tickets;
	},

	// serviceTicketAll: async () => await TicketRepository.getAll(),
	serviceTicketAll: async () => await TicketRepositorySupaBase.getAll(),
};
