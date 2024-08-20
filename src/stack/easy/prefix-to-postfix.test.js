import { prefixToPostfix } from './prefix-to-postfix';

describe.skip('prefixToPostfix', () => {
	test('should convert simple prefix expression to postfix', () => {
		const input = "*+AB-CD";
		const expectedOutput = "AB+CD-*";
		expect(prefixToPostfix(input)).toBe(expectedOutput);
	});

	test('should convert complex prefix expression to postfix', () => {
		const input = "*-A/BC-/AKL";
		const expectedOutput = "ABC/-AK/L-*";
		expect(prefixToPostfix(input)).toBe(expectedOutput);
	});
});
