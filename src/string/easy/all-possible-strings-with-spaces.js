/**
 * Given a string, print all possible strings that can be made by placing spaces (zero or one) in between the characters.
 *
 * @param {string} str - The input string.
 * @returns {string[]} - An array of all possible strings with spaces.
 *
 * @example
 * // Example 1
 * // Input: "ABC"
 * // Output: ["ABC", "AB C", "A BC", "A B C"]
 */
export function generateStringsWithSpaces(str) {
	function generateHelper(current, index, result) {
		if (index === str.length) {
			result.push(current);
			return;
		}

		// Include the current character without a space
		generateHelper(current + str[index], index + 1, result);

		// Include the current character with a space if not at the end
		if (index < str.length - 1) {
			generateHelper(current + str[index] + ' ', index + 1, result);
		}
	}

	const result = [];
	generateHelper("", 0, result);
	return result;
}
