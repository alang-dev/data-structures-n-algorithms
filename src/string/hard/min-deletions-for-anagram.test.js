import { minDeletionsForAnagram } from './min-deletions-for-anagram';

describe.skip('minDeletionsForAnagram', () => {
	test('Example 1', () => {
		const str1 = "bcadeh";
		const str2 = "hea";
		const output = 3;
		expect(minDeletionsForAnagram(str1, str2)).toBe(output);
	});

	test('Example 2', () => {
		const str1 = "cddgk";
		const str2 = "gcd";
		const output = 2;
		expect(minDeletionsForAnagram(str1, str2)).toBe(output);
	});

	test('Example 3', () => {
		const str1 = "bca";
		const str2 = "acb";
		const output = 0;
		expect(minDeletionsForAnagram(str1, str2)).toBe(output);
	});

	test('Different lengths with no common characters', () => {
		const str1 = "abcd";
		const str2 = "efgh";
		const output = 8;
		expect(minDeletionsForAnagram(str1, str2)).toBe(output);
	});

	test('Partial overlap of characters', () => {
		const str1 = "abc";
		const str2 = "cde";
		const output = 4;
		expect(minDeletionsForAnagram(str1, str2)).toBe(output);
	});

	test('One empty string', () => {
		const str1 = "abc";
		const str2 = "";
		const output = 3;
		expect(minDeletionsForAnagram(str1, str2)).toBe(output);
	});

	test('Both strings empty', () => {
		const str1 = "";
		const str2 = "";
		const output = 0;
		expect(minDeletionsForAnagram(str1, str2)).toBe(output);
	});
});
