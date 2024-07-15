/**
 * Given a sequence of strings, find the second most repeated (or frequent) string in the given sequence.
 * Assuming there is always a single word that is the second most repeated.
 *
 * @param {string[]} arr - The input array of strings.
 * @returns {string} - The second most repeated string.
 *
 * @example
 * // Example 1
 * // Input: ["aaa", "bbb", "ccc", "bbb", "aaa", "aaa"]
 * // Output: "bbb"
 *
 * @example
 * // Example 2
 * // Input: ["geeks", "for", "geeks", "for", "geeks", "aaa"]
 * // Output: "for"
 */
export function secondMostRepeatedString(arr) {
	const frequency = {}

	for (const item of arr) {
		frequency[item] = (frequency[item] || 0) + 1
	}

	let firstMax = 0, secondMax = 0;
	let firstString = "", secondString = "";

	// Find the first and second most frequent strings
	for (const [str, count] of Object.entries(frequency)) {
		if (count > firstMax) {
			secondMax = firstMax;
			secondString = firstString;

			firstMax = count;
			firstString = str;
		} else if (count > secondMax && count !== firstMax) {
			secondMax = count;
			secondString = str;
		}
	}

	return secondString;
}
