import { Screening } from "./Screening";
import { Money } from "./Money";
import { DiscountCondition } from "./DiscountCondition";
export abstract class DiscountPolicy {
	public conditions: Array<DiscountCondition> = new Array();

	constructor(conditions: DiscountCondition[]) {
		this.conditions = conditions;
	}

	public calculateDiscountAmount(screening: Screening): Money {
		return screening.getMovieFee();
	}
}
