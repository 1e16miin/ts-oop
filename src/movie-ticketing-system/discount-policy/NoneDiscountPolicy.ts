import { Money } from "../Money";
import { Screening } from "../Screening";
import { DiscountPolicy } from "./DiscountPolicy";
export class NoneDiscountPolicy implements DiscountPolicy {
	constructor() {}
	public calculateDiscountAmount(screening: Screening): Money {
		return Money.ZERO;
	}
}
