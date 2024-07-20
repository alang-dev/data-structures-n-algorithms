import { findLongestBalancedSubsequenceLength } from './longest-balanced-subsequence';

describe.skip('findLongestBalancedSubsequenceLength', () => {
	test('should return the length of the longest balanced subsequence', () => {
		expect(findLongestBalancedSubsequenceLength('()())')).toBe(4);
		expect(findLongestBalancedSubsequenceLength('()(((((()')).toBe(4);
		expect(findLongestBalancedSubsequenceLength('(()())')).toBe(6);
		expect(findLongestBalancedSubsequenceLength(')))((((')).toBe(0);
	});

	test('should handle edge cases', () => {
		expect(findLongestBalancedSubsequenceLength('')).toBe(0);
		expect(findLongestBalancedSubsequenceLength('()')).toBe(2);
		expect(findLongestBalancedSubsequenceLength('()()')).toBe(4);
		expect(findLongestBalancedSubsequenceLength('((((((((')).toBe(0);
	});
});
