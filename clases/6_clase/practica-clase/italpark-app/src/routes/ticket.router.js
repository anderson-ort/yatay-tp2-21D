import { Router } from "express";
import { TicketController } from "../controller/ticket.controller.js";

const ticketRouter = Router();

ticketRouter.get("/ticket-valid/:codUser", TicketController.ticketValidation);
ticketRouter.post("/ticket", TicketController.ticketCreateOne);
ticketRouter.delete("/ticket/:id", TicketController.ticketDeleteOne);
ticketRouter.put("/update-exp-date", TicketController.ticketUpdateByUserCode);

export { ticketRouter };
