import { Screening } from "./Screening";
import { Money } from "./Money";
import { DiscountCondition } from "./DiscountCondition";
export abstract class DiscountPolicy {
	public conditions: DiscountCondition[];

	constructor(conditions: DiscountCondition[]) {
		this.conditions = conditions;
	}

	public calculateDiscountAmount(screening: Screening): Money {
		for (const condition of this.conditions) {
			if (condition.isSatisfiedBy(screening)) {
				return this.getDiscountAmount(screening);
			}
		}
		return Money.ZERO;
	}

	protected abstract getDiscountAmount(screening: Screening): Money;
}
