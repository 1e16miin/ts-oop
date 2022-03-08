import { Movie } from "./Movie";
import { Duration, DayOfWeek, LocalTime } from "js-joda";
import { Money } from "./Money";
import { AmountDiscountPolicy } from "./AmountDiscountPolicy";
import { SequenceCondition } from "./SequenceCondition";
import { PeriodCondition } from "./discount-condition/PeriodCondition";
import { PercentDiscountPolicy } from "./discount-policy/PercentDiscountPolicy";
import { NoneDiscountPolicy } from "./discount-policy/NoneDiscountPolicy";

const avatar: Movie = new Movie(
	"아바타",
	Duration.ofMinutes(120),
	Money.wons(10000),
	new AmountDiscountPolicy(
		Money.wons(800),
		new SequenceCondition(1),
		new SequenceCondition(10),
		new PeriodCondition(
			DayOfWeek.MONDAY,
			LocalTime.of(10, 0),
			LocalTime.of(11, 59)
		),
		new PeriodCondition(
			DayOfWeek.THURSDAY,
			LocalTime.of(10, 0),
			LocalTime.of(11, 59)
		)
	)
);

const titanic: Movie = new Movie(
	"타이타닉",
	Duration.ofMinutes(189),
	Money.wons(11000),
	new PercentDiscountPolicy(
		0.1,
		new PeriodCondition(
			DayOfWeek.TUESDAY,
			LocalTime.of(14, 0),
			LocalTime.of(15, 59)
		),
		new SequenceCondition(2),
		new PeriodCondition(
			DayOfWeek.THURSDAY,
			LocalTime.of(10, 0),
			LocalTime.of(13, 59)
		)
	)
);

const starWars = new Movie(
	"스타워즈",
	Duration.ofMinutes(210),
	Money.wons(10000),
	new NoneDiscountPolicy()
);

export { avatar, titanic, starWars };
