/**
 * Finds the first negative integer in every window of size `k` for a given array.
 * If a window does not contain a negative integer, the function prints 0 for that window.
 *
 * Example 1:
 * Input:
 * arr = [-8, 2, 3, -6, 10],
 * k = 2
 * Output:
 * [-8, 0, -6, -6]
 * Explanation:
 * - Window { -8, 2 } contains -8.
 * - Window { 2, 3 } does not contain a negative integer, so output is 0.
 * - Window { 3, -6 } contains -6.
 * - Window { -6, 10 } contains -6.
 *
 * Example 2:
 * Input:
 * arr = [12, -1, -7, 8, -15, 30, 16, 28],
 * k = 3
 * Output:
 * [-1, -1, -7, -15, -15, 0]
 * Explanation:
 * - Window { 12, -1, -7 } contains -1.
 * - Window { -1, -7, 8 } contains -1.
 * - Window { -7, 8, -15 } contains -7.
 * - Window { 8, -15, 30 } contains -15.
 * - Window { -15, 30, 16 } contains -15.
 * - Window { 30, 16, 28 } does not contain a negative integer, so output is 0.
 *
 * @param {number[]} arr - The array of integers.
 * @param {number} k - The size of the window.
 * @returns {number[]} - An array containing the first negative integer for each window of size `k`.
 */
export function firstNegativeInEveryWindow(arr, k) {
	// Implementation to be provided by the user
}
