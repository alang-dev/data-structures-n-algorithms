/**
 * Checks if the given array of strings can be chained to form a circle.
 * A string X can be placed before another string Y in a circle if the last
 * character of X is the same as the first character of Y.
 *
 * @param {string[]} arr - Array of strings to check.
 * @returns {boolean} - True if the strings can form a circle, false otherwise.
 *
 * @example
 * // Example 1:
 * // Input: ["geek", "king"]
 * // Output: true
 * // Explanation: Strings can be chained as "geek" -> "king" -> "geek",
 * // forming a circular chain where the last character of "geek" ('k')
 * // matches the first character of "king" ('k') and vice versa.
 *
 * // Example 2:
 * // Input: ["for", "geek", "rig", "kaf"]
 * // Output: true
 * // Explanation: Strings can be chained as "for" -> "rig" -> "geek" -> "kaf" -> "for",
 * // forming a circular chain where each consecutive pair shares matching characters.
 *
 * // Example 3:
 * // Input: ["aab", "bac", "aaa", "cda"]
 * // Output: true
 * // Explanation: Strings can be chained as "aaa" -> "aab" -> "bac" -> "cda" -> "aaa",
 * // forming a circular chain where each consecutive pair shares matching characters.
 *
 * // Example 4:
 * // Input: ["aaa", "bbb", "baa", "aab"]
 * // Output: true
 * // Explanation: Strings can be chained as "aaa" -> "aab" -> "bbb" -> "baa" -> "aaa",
 * // forming a circular chain where each consecutive pair shares matching characters.
 *
 * // Example 5:
 * // Input: ["aaa"]
 * // Output: true
 * // Explanation: With only one string, it trivially forms a circle.
 *
 * // Example 6:
 * // Input: ["aaa", "bbb"]
 * // Output: false
 * // Explanation: Strings cannot be chained to form a circle because "aaa" does not match "bbb".
 *
 * // Example 7:
 * // Input: ["abc", "efg", "cde", "ghi", "ija"]
 * // Output: true
 * // Explanation: Strings can be reordered as "abc" -> "cde" -> "efg" -> "ghi" -> "ija" -> "abc",
 * // forming a circular chain where each consecutive pair shares matching characters.
 *
 * // Example 8:
 * // Input: ["ijk", "kji", "abc", "cba"]
 * // Output: false
 * // Explanation: Strings cannot be chained to form a circle because "ijk" does not match "kji".
 */
export function canFormCircle(arr) {
	if (arr.length < 1) {
		return false
	}
	if (arr.length === 1) {
		return true
	}

	const circle = [arr[0]]
	const remain = arr.slice(1)

	let prevHead = circle[0].at(circle[0].length - 1)
	let i = 1

	while (i < arr.length) {
		const foundIndex = remain.findIndex(current => {
			const isHeadTailSame = prevHead === current.at(0)

			if (isHeadTailSame) {
				prevHead = current.at(current.length - 1)
			}

			return isHeadTailSame
		})

		if (foundIndex === -1) {
			return false
		}

		remain.splice(foundIndex, 1);

		i++;
	}

	return remain.length === 0
}
