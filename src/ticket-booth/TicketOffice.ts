import { Ticket } from "./Ticket";
import { Audience } from "./Audience";

export class TicketOffice {
	private amount: number;
	private tickets: Array<Ticket> = new Array();

	constructor(amount: number, tickets: Ticket) {
		this.amount = amount;
		this.tickets.concat(tickets);
	}

	private getTicket(): Ticket {
		return this.tickets.shift();
	}

	private plusAmount(amount: number) {
		this.amount += amount;
	}

	public sellTicketTo(audience: Audience) {
		this.plusAmount(audience.buy(this.getTicket()));
	}
}
