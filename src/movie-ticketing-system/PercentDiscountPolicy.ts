import { DiscountPolicy } from "./DiscountPolicy";
import { DiscountCondition } from "./DiscountCondition";
import { Money } from "./Money";
import { Screening } from "./Screening";
export class PercentDiscountPolicy extends DiscountPolicy {
	private percent: number;

	constructor(percent: number, ...conditions: DiscountCondition[]) {
		super(conditions);
		this.percent = percent;
	}

	protected getDiscountAmount(screening: Screening): Money {
		return screening.getMovieFee().times(this.percent);
	}
}
