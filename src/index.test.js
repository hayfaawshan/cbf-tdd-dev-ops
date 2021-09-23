import { FizzBuzzer } from "./index";

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
