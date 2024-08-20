import { postfixToPrefix } from './postfix-to-prefix';

describe.skip('postfixToPrefix', () => {
	test('should convert simple postfix expression to prefix', () => {
		const input = "AB+CD-*";
		const expectedOutput = "*+AB-CD";
		expect(postfixToPrefix(input)).toBe(expectedOutput);
	});

	test('should convert complex postfix expression to prefix', () => {
		const input = "ABC/-AK/L-*";
		const expectedOutput = "*-A/BC-/AKL";
		expect(postfixToPrefix(input)).toBe(expectedOutput);
	});
});
