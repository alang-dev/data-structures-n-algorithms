import { waysToIncreaseLCS } from './increase-lcs';

describe.skip('waysToIncreaseLCS', () => {
	test('Example 1', () => {
		const str1 = "abab";
		const str2 = "abc";
		const output = 3;
		expect(waysToIncreaseLCS(str1, str2)).toBe(output);
	});

	test('Example 2', () => {
		const str1 = "abcabc";
		const str2 = "abcd";
		const output = 4;
		expect(waysToIncreaseLCS(str1, str2)).toBe(output);
	});

	test('Edge Case: Single character strings', () => {
		const str1 = "a";
		const str2 = "a";
		const output = 0;
		expect(waysToIncreaseLCS(str1, str2)).toBe(output);
	});

	test('Edge Case: No common characters', () => {
		const str1 = "xyz";
		const str2 = "abc";
		const output = 0;
		expect(waysToIncreaseLCS(str1, str2)).toBe(output);
	});

	test('Additional Case: Longer strings with multiple LCS', () => {
		const str1 = "aabcc";
		const str2 = "adcac";
		const output = 5;
		expect(waysToIncreaseLCS(str1, str2)).toBe(output);
	});

	// Add more tests if needed
});
