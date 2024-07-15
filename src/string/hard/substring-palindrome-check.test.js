import { substringPalindromeCheck } from './substring-palindrome-check';

describe.skip('substringPalindromeCheck', () => {
	test('Example 1', () => {
		const s = "abaaabaaaba";
		const queries = [[0, 10], [5, 8], [2, 5], [5, 9]];
		const output = [true, false, false, true];
		expect(substringPalindromeCheck(s, queries)).toEqual(output);
	});

	test('Example 2', () => {
		const s = "racecar";
		const queries = [[0, 6], [1, 4], [2, 5]];
		const output = [true, true, true];
		expect(substringPalindromeCheck(s, queries)).toEqual(output);
	});

	test('Single character palindrome', () => {
		const s = "a";
		const queries = [[0, 0]];
		const output = [true];
		expect(substringPalindromeCheck(s, queries)).toEqual(output);
	});

	test('Empty string', () => {
		const s = "";
		const queries = [[0, 0], [1, 2]];
		const output = [false, false]; // No substrings to check
		expect(substringPalindromeCheck(s, queries)).toEqual(output);
	});

	test('Mixed results with varied lengths', () => {
		const s = "abcdedcba";
		const queries = [[0, 8], [1, 7], [2, 5], [3, 6]];
		const output = [true, true, true, true];
		expect(substringPalindromeCheck(s, queries)).toEqual(output);
	});

	test('No palindrome substrings', () => {
		const s = "abcdefg";
		const queries = [[0, 5], [1, 4], [2, 3]];
		const output = [false, false, false];
		expect(substringPalindromeCheck(s, queries)).toEqual(output);
	});
});
