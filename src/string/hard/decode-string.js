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
 * '[b][a]'
 */
export function decodeString(encodedString) {
	const strStack = []
	const numStack = []

	let left = ''
	for (const item of encodedString) {
		if (item !== '[' && item !== ']') {
			left += item
		} else if (item === '[') {
			let num = ''
			let i = left.length - 1
			while (i >= 0) {
				if (/^\d*$/.test(left.at(i))) {
					num = left.at(i) + num
				} else {
					break
				}
				i--;
			}
			numStack.push(Number(num) || 1)
			strStack.push(left.substring(0, i + 1) || '')

			left = ''
		} else { // item === ']'
			left = strStack.pop() + Array.from({length: numStack.pop()}, () => left)
				.join('')
		}
	}

	return left
}
