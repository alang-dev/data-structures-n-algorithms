import { largestDistinctSubsequence } from './largest-distinct-subsequence';

describe.skip('largestDistinctSubsequence', () => {
	test('should return the lexicographically largest subsequence with all distinct characters - case 1', () => {
		const s = 'ababc';
		const result = largestDistinctSubsequence(s);
		expect(result).toBe('bac');
		// Explanation: The possible subsequences with all distinct characters are {'abc', 'bac'}.
		// The largest lexicographically is 'bac'.
	});

	test('should return the lexicographically largest subsequence with all distinct characters - case 2', () => {
		const s = 'zydsbacab';
		const result = largestDistinctSubsequence(s);
		expect(result).toBe('zydscab');
		// Explanation: The largest subsequence with all distinct characters is 'zydscab'.
	});
});
