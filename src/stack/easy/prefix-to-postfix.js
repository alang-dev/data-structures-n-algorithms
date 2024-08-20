/**
 * @file prefix-to-postfix.js
 * @description Converts a prefix expression directly to postfix form.
 *
 * A prefix expression has the operator placed before its operands, like "*+AB-CD".
 * A postfix expression has the operator placed after its operands, like "AB+CD-*".
 * This function converts a prefix expression directly to its equivalent postfix form, which is more efficient than converting to infix first.
 *
 * @param {string} expression - The prefix expression to be converted.
 * @returns {string} - The postfix expression.
 *
 * @example
 * // Example 1
 * // Input: "*+AB-CD"
 * // Output: "AB+CD-*"
 * const result1 = prefixToPostfix("*+AB-CD");
 *
 * @example
 * // Example 2
 * // Input: "*-A/BC-/AKL"
 * // Output: "ABC/-AK/L-*"
 * const result2 = prefixToPostfix("*-A/BC-/AKL");
 */
export function prefixToPostfix(expression) {
	// Implementation goes here
}
