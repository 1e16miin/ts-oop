import { DiscountPolicy } from "./DiscountPolicy";
import { Money } from "./Money";
import { Screening } from "./Screening";
export class NoneDiscountPolicy extends DiscountPolicy {
	constructor() {
		super([]);
	}
	protected getDiscountAmount(screening: Screening): Money {
		return Money.ZERO;
	}
}
