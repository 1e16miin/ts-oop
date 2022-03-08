import { Invitation } from "./invitation";
import { Ticket } from "./Ticket";
export class Bag {
	private amount: number;
	private invitation: Invitation;
	private ticket: Ticket;

	constructor(invaitation: Invitation, amount: number) {
		this.invitation = invaitation;
		this.amount = amount;
	}

	public hold(ticket: Ticket) {
		this.setTicket(ticket);
		if (this.hasInvitation()) {
			return 0;
		} else {
			this.minusAmount(ticket.getFee());
			return ticket.getFee();
		}
	}

	private hasInvitation(): boolean {
		return this.invitation != null;
	}

	private setTicket(ticket: Ticket): void {
		this.ticket = ticket;
	}

	private minusAmount(amount: number): void {
		this.amount -= amount;
	}
}
