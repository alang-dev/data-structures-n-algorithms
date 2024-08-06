/**
 * Counts the number of binary strings of a given length with consecutive 1's.
 *
 * @example
 * // For n = 2, there are 4 possible strings: '00', '01', '10', '11'.
 * // Only '11' has consecutive 1's, so the function returns 1.
 * countConsecutiveOnes(2); // returns 1
 * @example
 * // For n = 3, there are 8 possible strings: '000', '001', '010', '011', '100', '101', '110', '111'.
 * // The strings '011', '110', and '111' have consecutive 1's, so the function returns 3.
 * countConsecutiveOnes(3); // returns 3
 * @example
 * // For n = 5, there are 32 possible strings.
 * // 19 of these strings have consecutive 1's (e.g., '00111', '10110', '11100').
 * countConsecutiveOnes(5); // returns 19
 *
 * @param {number} n - The length of the binary strings.
 * @returns {number} The number of binary strings of length n with consecutive 1's.
 */
export function countConsecutiveOnes(n) {
	if (n < 2) {
		return 0
	}

	let max = (1 << n)
	let count = 0
	while (max > 0) {
		if ((max & (max >> 1)) !== 0) {
			count++;
		}

		max--;
	}

	return count
}
