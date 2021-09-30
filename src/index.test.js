import { FizzBuzzer, StatsCalculator } from "./index";

describe("FizzBuzzer function should", () => {
	it("return 1 given 1", () => {
		const actual = FizzBuzzer(1);
		expect(actual).toEqual(1);
	});
	it("return Fizz when number is multiple of 3", () => {
		const actual = FizzBuzzer(6);
		expect(actual).toEqual("Fizz");
	});
	it("return Buzz when number is multiple of 5", () => {
		const actual = FizzBuzzer(10);
		expect(actual).toEqual("Buzz");
	});
	it("return FizzBuzz when number is multiple of 15", () => {
		const actual = FizzBuzzer(15);
		expect(actual).toEqual("FizzBuzz");
	});
});

describe("Stats calculator function should", () => {
	it("return correct values when passed array", () => {
		const sequence = [6, 9, 15, -2, 92, 11];
		const actual = StatsCalculator(sequence);
		const output = `The minimum value is '-2'. The maximum value is '92'. The average value is '21'. The number of elements is '6'.`;

		expect(actual).toEqual(output);
	});
});
