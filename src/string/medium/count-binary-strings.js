/**
 * Count all possible distinct binary strings of length n such that there are no consecutive 1's.
 *
 * @param {number} n - The length of the binary strings.
 * @returns {number} - The count of valid binary strings.
 *
 * @example
 * // Example 1
 * // Input: n = 2
 * // Output: 3
 * // Explanation: The 3 strings are "00", "01", "10".
 *
 * @example
 * // Example 2
 * // Input: n = 3
 * // Output: 5
 * // Explanation: The 5 strings are "000", "001", "010", "100", "101".
 */
export function countBinaryStrings(n) {
	if (n < 1) {
		return 0
	}

	if (n === 1) {
		return 2
	}

	let max = (1 << n)
	let count = 0

	while (max > 0) {
		if ((max & (max >> 1)) === 0) {
			count++;
		}

		max--;
	}

	return count
}
