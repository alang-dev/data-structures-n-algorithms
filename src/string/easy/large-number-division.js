/**
 * Given a large number (represented as a string) which has to divide by another number (represented as int data type).
 * The large number can be very large which does not even fit in long long in C++. The task is to find the division of these numbers.
 *
 * @param {string} number - The large number represented as a string.
 * @param {number} divisor - The number to divide by.
 * @returns {string} - The result of the division.
 *
 * @example
 * // Example 1
 * // Input: number = "1260257", divisor = 37
 * // Output: 34061
 *
 * @example
 * // Example 2
 * // Input: number = "12313413534672234", divisor = 754
 * // Output: 16330787181262
 *
 * @example
 * // Example 3
 * // Input: number = "1248163264128256512", divisor = 125
 * // Output: 9985306113026052
 */
export function divideLargeNumber(number, divisor) {
	let result = ''
	let current = 0

	for (let i = 0; i < number.length; i++) {
		current = current * 10 + parseInt(number.at(i), 10)

		if (current >= divisor) {
			result += Math.floor(current / divisor)
			current = current % divisor
		} else {
			result = result.length > 0 ? result + '0' : result
		}
	}

	return result
}
