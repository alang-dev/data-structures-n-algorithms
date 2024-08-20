import { infixToPrefix } from './infix-to-prefix';

describe.skip('infixToPrefix', () => {
	test('should convert simple infix expression to prefix', () => {
		const input = "A * B + C / D";
		const expectedOutput = "+ * A B / C D";
		expect(infixToPrefix(input)).toBe(expectedOutput);
	});

	test('should convert complex infix expression with parentheses to prefix', () => {
		const input = "(A - B / C) * (A / K - L)";
		const expectedOutput = "* - A / B C - / A K L";
		expect(infixToPrefix(input)).toBe(expectedOutput);
	});
});
