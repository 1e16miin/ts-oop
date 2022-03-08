import { TicketOffice } from "./TicketOffice";
import { Audience } from "./Audience";
import { Ticket } from "./Ticket";
export class TicketSeller {
	private ticketOfiice: TicketOffice;
	constructor(ticketOfiice: TicketOffice) {
		this.ticketOfiice = ticketOfiice;
	}

	public sellTo(audience: Audience): void {
		this.ticketOfiice.sellTicketTo(audience);
	}
}
