/**
 * Given a string, find the minimum and the maximum length words in it.
 *
 * @param {string} str - The input string.
 * @returns {{min: string, max: string}} - An object containing the minimum length word and the maximum length word.
 *
 * @example
 * // Example 1
 * // Input: "This is a test string"
 * // Output: { min: "a", max: "string" }
 *
 * @example
 * // Example 2
 * // Input: "GeeksforGeeks A computer Science portal for Geeks"
 * // Output: { min: "A", max: "GeeksforGeeks" }
 */
export function findMinMaxLengthWords(str) {
	let minWord = '', maxWord = ''

	let word = ''
	for (let i = 0; i < str.length; i++) {
		if (str.at(i) !== ' ') {
			word += str.at(i)
		} else {
			if (word.length > maxWord.length) {
				maxWord = word
			}

			if (minWord.length > word.length || minWord.length === 0) {
				minWord = word
			}

			word = ''
		}
	}

	if (word.length > maxWord.length) {
		maxWord = word
	}

	if (minWord.length > word.length || minWord.length === 0) {
		minWord = word
	}

	return {min: minWord, max: maxWord}
}
