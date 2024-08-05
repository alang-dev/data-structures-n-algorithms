/**
 * Given a string X, form a string S by repeating string X multiple times.
 * There are Q queries of forms i and j. Print "Yes" if the element at index i is the same as the element at index j in S, otherwise print "No".
 *
 * @param {string} X - The input string to be repeated.
 * @param {Array.<Array.<number>>} queries - An array of queries, each containing two indices [i, j].
 * @returns {string[]} - An array of results for each query, either "Yes" or "No".
 *
 * @example
 * // Example 1
 * // Input: X = "geeksforgeeks", Q = 3, queries = [[0, 8], [8, 13], [6, 15]]
 * // Output: ["Yes", "Yes", "No"]
 * // Explanation:
 * // For Query 1, index 0 and index 8 have same element i.e 'g'.
 * // For Query 2, index 8 and index 13 have same element i.e 'g'.
 * // For Query 3, index 6 = 'o' and index 15 = 'e' which are not same.
 */
export function repeatedStringQueries(X, queries) {
	if (X.length === 0) {
		return ["No"]
	}

	return queries.map(([i, j]) => {
		const leftIndex = findIndex(i, X);
		const rightIndex = findIndex(j, X);

		return X.at(leftIndex) === X.at(rightIndex) ? "Yes" : "No";
	})
}

/**
 *
 * @param target {number}
 * @param str {string}
 */
function findIndex(target, str) {
	if (target >= str.length) {
		return target % str.length
	}

	return target
}
