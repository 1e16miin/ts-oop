import { Movie } from "./Movie";
import { Money } from "./Money";
import { Customer } from "./Customer";
import { LocalDate } from "js-joda";
import { Reservation } from "./Reservation";

export class Screening {
	private movie: Movie;
	private sequence: number;
	private whenScreened: LocalDate;

	constructor(movie: Movie, sequence: number, whenScreened: LocalDate) {
		this.movie = movie;
		this.sequence = sequence;
		this.whenScreened = whenScreened;
	}

	public getStartTime(): LocalDate {
		return this.whenScreened;
	}

	public isSequence(sequence: number) {
		return sequence === this.sequence;
	}

	public getMovieFee(): Money {
		return this.movie.getFee();
	}

	public reserve(customer: Customer, audienceCount: number): Reservation {
		return new Reservation(
			customer,
			this,
			this.calculateFee(audienceCount),
			audienceCount
		);
	}

	public calculateFee(audienceCount: number): Money {
		return this.movie.calculateMovieFee(this).times(audienceCount);
	}
}
