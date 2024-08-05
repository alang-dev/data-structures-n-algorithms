import {isBalancedParentheses} from "./balanced-parentheses";

describe('isBalancedParentheses', () => {
	test('should return "Yes" for balanced parentheses', () => {
		expect(isBalancedParentheses('(())[]')).toBe('Yes');
		expect(isBalancedParentheses('({[]})')).toBe('Yes');
		expect(isBalancedParentheses('')).toBe('Yes');
	});

	test('should return "No" for unbalanced parentheses', () => {
		expect(isBalancedParentheses('))(({}{')).toBe('No');
		expect(isBalancedParentheses('([)]')).toBe('No');
		expect(isBalancedParentheses('((((')).toBe('No');
	});
});
