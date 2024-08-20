import {infixToPostfix} from './infix-to-postfix';

describe.skip('infixToPostfix', () => {
	test('should convert simple infix expression', () => {
		const input = "A + B * C + D";
		const expectedOutput = "ABC*+D+";
		expect(infixToPostfix(input)).toBe(expectedOutput);
	});

	test('should convert complex infix expression with parentheses', () => {
		const input = "((A + B) – C * (D / E)) + F";
		const expectedOutput = "AB+CDE/*-F+";
		expect(infixToPostfix(input)).toBe(expectedOutput);
	});
});
