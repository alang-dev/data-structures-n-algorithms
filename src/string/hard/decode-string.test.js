import { decodeString } from './decode-string';

describe('decodeString', () => {
	test('Example 1', () => {
		const input = "1[b]";
		const output = "b";
		expect(decodeString(input)).toBe(output);
	});

	test('Example 1.1', () => {
		const input = "1[b]c";
		const output = "bc";
		expect(decodeString(input)).toBe(output);
	});

	test('Example 1.2', () => {
		const input = "2[b][c]a";
		const output = "bbca";
		expect(decodeString(input)).toBe(output);
	});

	test('Example 1.3', () => {
		const input = "2a[b][c]a";
		const output = "2abca";
		expect(decodeString(input)).toBe(output);
	});

	test('Example 2', () => {
		const input = "2[ab]";
		const output = "abab";
		expect(decodeString(input)).toBe(output);
	});

	test('Example 2.2', () => {
		const input = "m2[ab]";
		const output = "mabab";
		expect(decodeString(input)).toBe(output);
	});

	test('Example 3', () => {
		const input = "2[a2[b]c]";
		const output = "abbcabbc";
		expect(decodeString(input)).toBe(output);
	});

	test('Example 4', () => {
		const input = "3[b2[ca]]";
		const output = "bcacabcacabcaca";
		expect(decodeString(input)).toBe(output);
	});
});
