/**
 * Generate all binary strings that can be formed by replacing each wildcard character ('?')
 * in the input string with '0' or '1'.
 *
 * @param {string} binaryPattern - The input string containing '0', '1', and '?' characters.
 * @returns {string[]} An array of binary strings formed by replacing '?' with '0' or '1'.
 * @example
 *
 * // Example usage:
 * const inputString = "1??0?101";
 * const result = generateBinaryStrings(inputString);
 * console.log(result);
 * // Output:
 * // [
 * //   "10000101",
 * //   "10001101",
 * //   "10100101",
 * //   "10101101",
 * //   "11000101",
 * //   "11001101",
 * //   "11100101",
 * //   "11101101"
 * // ]
 */
export function binaryFromPattern(binaryPattern) {
	const questionIndexes = []

	for (let i = 0; i < binaryPattern.length; i++) {
		if (binaryPattern.at(i) === '?') {
			questionIndexes.push(i)
		}
	}

	let result = [binaryPattern];
	for (const questionIndex of questionIndexes) {

		const nextResult = []
		for (const str of result) {
			const zeroStr = str.substring(0, questionIndex) + '0' + str.substring(questionIndex + 1);
			const oneStr = str.substring(0, questionIndex) + '1' + str.substring(questionIndex + 1);

			// To keep to array sorted
			nextResult.push(zeroStr, oneStr)
		}

		result = nextResult
	}

	return result
}
