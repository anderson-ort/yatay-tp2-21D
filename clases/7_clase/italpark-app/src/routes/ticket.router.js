import { Router } from "express";
import { TicketController } from "../controller/ticket.controller.js";
import { authAPIKEY } from "../middleware/auth.api.key.js";
import { auth } from "../middleware/auth.basic.auth.js";
import { authbyToken } from "../middleware/auth.jwt.js";

const ticketRouter = Router();

ticketRouter.get("/all", TicketController.ticketsListingAll);
ticketRouter.get("/ticket-valid/:codUser", TicketController.ticketValidation);
ticketRouter.post("/ticket", TicketController.ticketCreateOne);
ticketRouter.delete("/ticket/:id", TicketController.ticketDeleteOne);
ticketRouter.put("/update-exp-date", TicketController.ticketUpdateByUserCode);

export { ticketRouter };
