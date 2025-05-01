import { TicketService } from "../services/ticket.service.js";

export const TicketController = {
	ticketValidation: async (req, res) => {
		const { codUser } = req.params;
		const ticket = await TicketService.serviceTicketValidation(codUser);

		if (!ticket) {
			res.status(404).json({
				payload: null,
				message: "No Ticket",
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: "Success",
			payload: ticket.id,
			ok: true,
		});
		return;
	},

	ticketCreateOne: async (req, res) => {
		const { ticket } = req.body;
		try {
			const ticketResponse = TicketService.serviceTicketCreation(ticket);
			res.status(200).json({
				message: "Success",
				payload: { ...ticketResponse, userCode: "******" },
				ok: true,
			});
			return;
		} catch (e) {
			console.log({ message: e.message, message: "algo salio mal" });
			res.status(404).json({
				payload: null,
				message: "No se pudo crear el ticket",
				ok: false,
			});
			return;
		}
	},

	ticketDeleteOne: async (req, res) => {
		const { id } = req.params;
		const idTicket = await TicketService.serviceTicketDelete(id);

		if (!idTicket) {
			res.status(404).json({
				payload: null,
				message: "No se pudo borrar el ticket",
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: `Success:${idTicket} deleted`,
			payload: { idTicket },
			ok: true,
		});
		return;
	},

	ticketUpdateByUserCode: async (req, res) => {
		const { userCode, semanasPlus } = req.body;
		console.log(userCode, semanasPlus);

		const ticketsUpdated = await TicketService.serviceUpdateTicket(
			userCode,
			semanasPlus,
		);

		if (!ticketsUpdated) {
			res.status(404).json({
				payload: null,
				message: "No se pudo actualizar nada",
				ok: false,
			});
			return;
		}

		const newUpdatedTickets = ticketsUpdated.map((ticket) => ({
			id: ticket.id,
			newExpDate: ticket.expDate,
		}));

		res.status(200).json({
			message: `Ticket modificado`,
			payload: newUpdatedTickets,
			ok: true,
		});
		return;
	},
};
