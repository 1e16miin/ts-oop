import { Duration } from "js-joda";

import { DiscountPolicy } from "./discount-policy/DiscountPolicy";
import { Money } from "./Money";
import { Screening } from "./Screening";

export class Movie {
	private title: string;
	private runningTime: Duration;
	private fee: Money;
	private discountPolicy: DiscountPolicy;

	constructor(
		title: string,
		runningTime: Duration,
		fee: Money,
		discountPolicy: DiscountPolicy
	) {
		this.title = title;
		this.runningTime = runningTime;
		this.fee = fee;
		this.discountPolicy = discountPolicy;
	}

	public getFee(): Money {
		return this.fee;
	}

	public calculateMovieFee(screening: Screening): Money {
		return this.fee.minus(
			this.discountPolicy.calculateDiscountAmount(screening)
		);
	}

	public changeDiscountPolicy(discountPolicy: DiscountPolicy): void{
		this.discountPolicy = discountPolicy
	}
}
