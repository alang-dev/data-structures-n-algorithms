/**
 * Generates the power set of a given set S.
 * The power set P(S) is the set of all subsets of S.
 *
 * @param {Array} set - The input set for which to generate the power set.
 * @returns {Array<Array>} - Array of arrays representing all subsets of the input set.
 *
 * @example
 * // Example 1:
 * // Input: set = ['a', 'b', 'c']
 * // Output: [
 * //   [],          // Empty set
 * //   ['a'],       // Subset with 'a'
 * //   ['b'],       // Subset with 'b'
 * //   ['a', 'b'],  // Subset with 'a' and 'b'
 * //   ['c'],       // Subset with 'c'
 * //   ['a', 'c'],  // Subset with 'a' and 'c'
 * //   ['b', 'c'],  // Subset with 'b' and 'c'
 * //   ['a', 'b', 'c']  // Subset with 'a', 'b', and 'c'
 * // ]
 *
 * // Example 2:
 * // Input: set = [1, 2, 3, 4]
 * // Output: [
 * //   [],            // Empty set
 * //   [1],           // Subset with 1
 * //   [2],           // Subset with 2
 * //   [1, 2],        // Subset with 1 and 2
 * //   [3],           // Subset with 3
 * //   [1, 3],        // Subset with 1 and 3
 * //   [2, 3],        // Subset with 2 and 3
 * //   [1, 2, 3],     // Subset with 1, 2, and 3
 * //   [4],           // Subset with 4
 * //   [1, 4],        // Subset with 1 and 4
 * //   [2, 4],        // Subset with 2 and 4
 * //   [1, 2, 4],     // Subset with 1, 2, and 4
 * //   [3, 4],        // Subset with 3 and 4
 * //   [1, 3, 4],     // Subset with 1, 3, and 4
 * //   [2, 3, 4],     // Subset with 2, 3, and 4
 * //   [1, 2, 3, 4]   // Subset with 1, 2, 3, and 4
 * // ]
 */
export function generatePowerSet(set) {
	const powerSet = [];
	const totalSubsets = 1 << set.length; // 2^n, where n is the number of elements in the set

	for (let i = 0; i < totalSubsets; i++) {
		const subset = [];
		for (let j = 0; j < set.length; j++) {
			// TODO I dont understand
			if (i & (1 << j)) { // Check if the j-th bit in i is set
				subset.push(set[j]);
			}
		}
		powerSet.push(subset);
	}

	return powerSet;
}
