/**
 * Given a string of length n (1 <= n <= 10^6) and a number k, find the kth non-repeating character in the string.
 *
 * @param {string} str - The input string.
 * @param {number} k - The position of the non-repeating character to find.
 * @returns {string} - The kth non-repeating character or a message if there are fewer than k non-repeating characters.
 *
 * @example
 * // Example 1
 * // Input: "geeksforgeeks", 3
 * // Output: "r"
 * // Explanation: First non-repeating character is f, second is o and third is r.
 *
 * @example
 * // Example 2
 * // Input: "geeksforgeeks", 2
 * // Output: "o"
 *
 * @example
 * // Example 3
 * // Input: "geeksforgeeks", 4
 * // Output: "Less than k non-repeating characters in input."
 */
export function findKthNonRepeatingCharacter(str, k) {
	const repeated = new Set()
	const nonRepeated = new Set()

	for (const item of str) {
		if (!repeated.has(item)) {
			nonRepeated.add(item)
			repeated.add(item)
		} else {
			nonRepeated.delete(item)
		}
	}

	if (nonRepeated.size < k) {
		return 'Less than k non-repeating characters in input.'
	}

	return Array.from(nonRepeated).at(k - 1)
}
