/**
 * Finds the minimum number of rotations required to get the same string.
 *
 * @param {string} s - The input string.
 * @returns {number} - The minimum number of rotations required.
 *
 * @example
 * // Example 1:
 * // Input: s = "geeks"
 * // Output: 5
 *
 * // Example 2:
 * // Input: s = "aaaa"
 * // Output: 1
 */
export function minRotations(s) {
	let rotationCount = 0;
	let rotatedStr = s;
	while (rotationCount < s.length) {
		rotationCount++;

		rotatedStr = rotatedStr.substring(1) + rotatedStr.at(0)
		if (rotatedStr === s) {
			return rotationCount
		}
	}

	return rotationCount
}
