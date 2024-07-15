import { decodeString } from './decode-string';

describe.skip('decodeString', () => {
	test('Example 1', () => {
		const input = "1[b]";
		const output = "b";
		expect(decodeString(input)).toBe(output);
	});

	test('Example 2', () => {
		const input = "2[ab]";
		const output = "abab";
		expect(decodeString(input)).toBe(output);
	});

	test('Example 3', () => {
		const input = "2[a2[b]]";
		const output = "abbabb";
		expect(decodeString(input)).toBe(output);
	});

	test('Example 4', () => {
		const input = "3[b2[ca]]";
		const output = "bcacabcacabcaca";
		expect(decodeString(input)).toBe(output);
	});

	// Add more tests if needed
});
