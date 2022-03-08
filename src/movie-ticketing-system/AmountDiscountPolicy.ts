import { DefaultDiscountPolicy } from "./discount-policy/DefaultDiscountPolicy";
import { Money } from "./Money";
import { DiscountCondition } from "./discount-condition/DiscountCondition";
import { Screening } from "./Screening";
export class AmountDiscountPolicy extends DefaultDiscountPolicy {
	private discountAmount: Money;
	constructor(discountAmount: Money, ...conditions: DiscountCondition[]) {
		super(conditions);
		this.discountAmount = discountAmount;
	}

	protected getDiscountAmount(screening: Screening): Money {
		return this.discountAmount;
	}
}
