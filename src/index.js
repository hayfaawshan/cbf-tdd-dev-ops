export const FizzBuzzer = (number) =>
	number % 15 === 0
		? "FizzBuzz"
		: number % 5 === 0
		? "Buzz"
		: number % 3 === 0
		? "Fizz"
		: number;

export const StatsCalculator = (seq) => {
	const sortedSeq = seq.sort();
	const total = sortedSeq.length;
	const min = sortedSeq[0];
	const max = sortedSeq[total - 1];
	const average = Math.floor(sortedSeq.reduce((a, b) => a + b, 0) / total);

	return `The minimum value is '${min}'. The maximum value is '${max}'. The average value is '${average}'. The number of elements is '${total}'.`;
};
