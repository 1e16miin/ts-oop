import { DayOfWeek, LocalTime } from "js-joda";
import { DiscountCondition } from "./DiscountCondition";
import { Screening } from "./Screening";
export class PeriodCondition implements DiscountCondition {
	private dayOfWeek: DayOfWeek;
	private startTime: LocalTime;
	private endTime: LocalTime;

	constructor(dayOfWeek: DayOfWeek, startTime: LocalTime, endTime: LocalTime) {
		this.dayOfWeek = dayOfWeek;
		this.startTime = startTime;
		this.endTime = endTime;
	}

	public isSatisfiedBy(screening: Screening): boolean {
		return (
			screening.getStartTime().dayOfWeek() === this.dayOfWeek &&
			this.startTime.compareTo(screening.getStartTime().toLocalTime()) <= 0 &&
			this.endTime.compareTo(screening.getStartTime().toLocalTime()) >= 0
		);
	}
}
