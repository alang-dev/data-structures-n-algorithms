import {countConsecutiveOnes} from "./count-consecutive-1s";

describe('countConsecutiveOnes', () => {
	test('handles base case (n = 1)', () => {
		expect(countConsecutiveOnes(1)).toBe(0);
		expect(countConsecutiveOnes(0)).toBe(0);
		expect(countConsecutiveOnes(-1)).toBe(0);
	});

	test('matches examples from problem description', () => {
		expect(countConsecutiveOnes(2)).toBe(1);
		expect(countConsecutiveOnes(3)).toBe(3);
		expect(countConsecutiveOnes(5)).toBe(19);
	});
});
