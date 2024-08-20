import { minimizeParenthesesLength } from './minimize-parentheses-length';

describe.skip('minimizeParenthesesLength', () => {
	test('should return the minimum count of remaining characters - case 1', () => {
		const s = '[]])([';
		const result = minimizeParenthesesLength(s);
		expect(result).toBe(4);
		// Explanation: Removing the subsequence { str[0], str[1] } modifies S to "])([". Therefore, the required output is 4.
	});

	test('should return the minimum count of remaining characters - case 2', () => {
		const s = '([)(])';
		const result = minimizeParenthesesLength(s);
		expect(result).toBe(0);
		// Explanation: Removing the subsequence { str[0], str[2] } modifies S to "[(])". Removing the subsequence { str[0], str[2] } modifies S to "()", which is then removed. Therefore, the required output is 0.
	});
});
