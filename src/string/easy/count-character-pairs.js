/**
 * Given a string, find the number of pairs of characters that are the same.
 * Pairs (s[i], s[j]), (s[j], s[i]), (s[i], s[i]), (s[j], s[j]) should be considered different.
 *
 * @param {string} s - The input string.
 * @returns {number} - The number of pairs of characters that are the same.
 *
 * @example
 * // Example 1
 * // Input: "air"
 * // Output: 3
 * // Explanation: 3 pairs that are equal are (a, a), (i, i) and (r, r)
 *
 * @example
 * // Example 2
 * // Input: "geeksforgeeks"
 * // Output: 31
 */
export function countCharacterPairs(s) {
	let count = 0
	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < s.length; j++) {
			if (s.at(i) === s.at(j)) {
				count++;
			}
		}
	}

	return count
}

// Improve: Use Array to hold the frequency of each ASCII character
