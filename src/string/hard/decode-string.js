/**
 * Decode an encoded string based on a specific pattern.
 *
 * An encoded string consists of patterns where:
 * - <count>[sub_str] indicates that 'sub_str' appears 'count' times.
 *
 * @param {string} encodedString - The encoded string to decode.
 * @returns {string} - Decoded string.
 *
 * @example
 * // Example 1:
 * // Input: encodedString = "1[b]"
 * // Output: "b"
 *
 * // Example 2:
 * // Input: encodedString = "2[ab]"
 * // Output: "abab"
 *
 * // Example 3:
 * // Input: encodedString = "2[a2[b]]"
 * // Output: "abbabb"
 *
 * // Example 4:
 * // Input: encodedString = "3[b2[ca]]"
 * // Output: "bcacabcacabcaca"
 */
export function decodeString(encodedString) {
	const strStack = []
	const numStack = []

	let left = ''
	for (const item of encodedString) {
		if (item !== '[' && item !== ']') {
			left += item
		} else if (item === '[') {
			const [num, text] = splitTextNum(left)
			numStack.push(num)
			strStack.push(text)

			left = ''
		} else { // item === ']'
			left = strStack.pop() + Array.from({length: numStack.pop()}, () => left)
				.join('')
		}
	}

	return left
}

/**
 *
 * @param str {string}
 * @return {[number, string]} Default value is [1, '']
 */
function splitTextNum(str) {
	let num = ''
	let i = str.length - 1
	while (i >= 0) {
		if (/^\d*$/.test(str.at(i))) {
			num = str.at(i) + num
		} else {
			break
		}

		i--;
	}

	const text = str.substring(0, i + 1) || ''

	return [Number(num) || 1, text]
}
