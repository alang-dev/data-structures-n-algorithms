import { canSplitIntoFourStrings } from './check-four-nonempty-strings';

describe.skip('canSplitIntoFourStrings', () => {
	test('should return "Yes" for strings that can be split into four distinct non-empty substrings', () => {
		expect(canSplitIntoFourStrings('geeksforgeeks')).toBe('Yes');
		expect(canSplitIntoFourStrings('abcd')).toBe('Yes');
		expect(canSplitIntoFourStrings('aabbccdd')).toBe('Yes');
	});

	test('should return "No" for strings that cannot be split into four distinct non-empty substrings', () => {
		expect(canSplitIntoFourStrings('aaabb')).toBe('No');
		expect(canSplitIntoFourStrings('aabb')).toBe('No');
		expect(canSplitIntoFourStrings('abc')).toBe('No');
	});
});
