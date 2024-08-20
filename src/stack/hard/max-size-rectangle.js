/**
 * Finds the maximum size rectangle binary sub-matrix with all 1s in a given binary matrix.
 *
 * The function calculates the area of the largest rectangle consisting of only 1s in a binary matrix.
 * It iterates through each row of the matrix, treating each row as the base of a histogram and calculates
 * the largest rectangle area that can be formed using that histogram.
 *
 * @param {number[][]} mat - A 2D array representing the binary matrix.
 * @returns {number} - The area of the largest rectangle with all 1s.
 *
 * @example
 * const mat = [
 *     [0, 1, 1, 0],
 *     [1, 1, 1, 1],
 *     [1, 1, 1, 1],
 *     [1, 1, 0, 0]
 * ];
 * console.log(maxSizeRectangle(mat));
 * // Outputs: 8
 * // Explanation: The largest rectangle formed with only 1s is either:
 * // (0, 1) to (2, 2) or (1, 1) to (2, 3) which is:
 * // 1 1 1
 * // 1 1 1
 *
 * @example
 * const mat = [
 *     [0, 1, 1],
 *     [1, 1, 1],
 *     [0, 1, 1]
 * ];
 * console.log(maxSizeRectangle(mat));
 * // Outputs: 6
 * // Explanation: The largest rectangle with only 1’s is from (0, 1) to (2, 2) which is:
 * // 1 1
 * // 1 1
 * // 1 1
 */
export function maxSizeRectangle(mat) {
	// Implementation goes here
}
