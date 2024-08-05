/**
 * Check if a string of parentheses is balanced.
 *
 * @param {string} str - The input string containing parentheses.
 * @returns {string} - "Yes" if parentheses are balanced, otherwise "No".
 *
 * @example
 * // Example 1
 * // Input: "(())[]"
 * // Output: "Yes"
 *
 * @example
 * // Example 2
 * // Input: "))(({}{"
 * // Output: "No"
 */

const PARENTHESES = {
	')': '(',
	']': '[',
	'}': '{'
}

export function isBalancedParentheses(str) {
	const parentheses = [];
	for (const item of str) {
		if (isClosing(item)) {
			const opening = parentheses.pop();
			const isPair = PARENTHESES[item] === opening;

			if (!isPair) {
				return 'No'
			}
		} else {
			parentheses.push(item);
		}
	}

	return parentheses.length === 0 ? 'Yes' : 'No'
}

function isClosing(parentThese) {
	return !!PARENTHESES[parentThese];
}
