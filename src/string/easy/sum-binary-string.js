/**
 * Given n binary strings, return their sum (also a binary string).
 *
 * @param {string[]} arr - An array of binary strings.
 * @returns {string} - The sum of the binary strings as a binary string.
 *
 * @example
 * // Example 1
 * // Input: arr = ["11", "1"]
 * // Output: "100"
 *
 * @example
 * // Example 2
 * // Input: arr = ["1", "10", "11"]
 * // Output: "110"
 */
export function sumBinaryStrings(arr) {
	if (arr.length === 0) {
		return '0'
	}

	if (arr.length === 1) {
		return arr[0]
	}

	let sum = arr[0]

	for (let i = 1; i < arr.length; i++) {
		const nextBin = arr[i]

		let sumIndex = Math.max(sum.length, nextBin.length)
		const left = sum.padStart(sumIndex, '0')
		const right = nextBin.padStart(sumIndex, '0')
		let nextSum = ''

		let carry = '0'
		sumIndex--;
		while (sumIndex >= 0) {
			const leftOperand = left.at(sumIndex)
			const rightOperand = right.at(sumIndex)

			if (leftOperand === rightOperand) {
				nextSum = carry + nextSum
				carry = leftOperand === '1' ? '1' : '0'
			} else {
				nextSum = (carry === '0' ? '1' : '0') + nextSum
			}

			sumIndex--;
		}

		sum = (carry === '0' ? '' : carry) + nextSum;
	}

	return sum
}
