import { alienLanguageOrder } from './alien-language-order';

describe.skip('alienLanguageOrder', () => {
	test('Example 1', () => {
		const input = ["baa", "abcd", "abca", "cab", "cad"];
		const output = "bdac";
		expect(alienLanguageOrder(input)).toBe(output);
	});

	test('Example 2', () => {
		const input = ["caa", "aaa", "aab"];
		const output = "cab";
		expect(alienLanguageOrder(input)).toBe(output);
	});

	// Add more tests if needed
});
