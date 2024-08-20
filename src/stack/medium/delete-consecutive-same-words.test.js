import { deleteConsecutiveSameWords } from './delete-consecutive-same-words';

describe.skip('deleteConsecutiveSameWords', () => {
	test('should return the number of words left after removing consecutive duplicates - case 1', () => {
		const words = ['ab', 'aa', 'aa', 'bcd', 'ab'];
		const result = deleteConsecutiveSameWords(words);
		expect(result).toBe(3); // Explanation: 'aa' and 'aa' destroy each other.
	});

	test('should return the number of words left after removing consecutive duplicates - case 2', () => {
		const words = ['tom', 'jerry', 'jerry', 'tom'];
		const result = deleteConsecutiveSameWords(words);
		expect(result).toBe(0); // Explanation: 'jerry' and 'jerry' destroy each other, then 'tom' and 'tom'.
	});
});
