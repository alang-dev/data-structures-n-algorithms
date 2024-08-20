/**
 * @file prefix-to-infix.js
 * @description Converts a prefix expression to infix form.
 *
 * A prefix expression has the operator placed before its operands, like "*+AB-CD".
 * An infix expression has the operator placed between its operands, like "(A + B) * (C - D)".
 * This function converts a prefix expression to its equivalent infix form, which is easier for humans to understand.
 *
 * @param {string} expression - The prefix expression to be converted.
 * @returns {string} - The infix expression.
 *
 * @example
 * // Example 1
 * // Input: "*+AB-CD"
 * // Output: "((A+B)*(C-D))"
 * const result1 = prefixToInfix("*+AB-CD");
 *
 * @example
 * // Example 2
 * // Input: "*-A/BC-/AKL"
 * // Output: "((A-(B/C))*((A/K)-L))"
 * const result2 = prefixToInfix("*-A/BC-/AKL");
 */
export function prefixToInfix(expression) {
	// Implementation goes here
}
