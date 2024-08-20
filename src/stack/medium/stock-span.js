/**
 * @file stock-span.js
 * @description Calculates the stock span for each day in a series of daily price quotes.
 *
 * The span of a stock's price on a given day is defined as the maximum number of consecutive days just before the given day,
 * for which the price of the stock on the current day is less than or equal to its price on the given day.
 *
 * @param {number} N - The number of days.
 * @param {number[]} price - An array of stock prices for each day.
 * @returns {number[]} - An array where each element represents the span of the stock's price for that day.
 *
 * @example
 * // Example 1
 * // Input: N = 7, price = [100, 80, 60, 70, 60, 75, 85]
 * // Output: [1, 1, 1, 2, 1, 4, 6]
 * const result1 = stockSpan(7, [100, 80, 60, 70, 60, 75, 85]);
 *
 * @example
 * // Example 2
 * // Input: N = 6, price = [10, 4, 5, 90, 120, 80]
 * // Output: [1, 1, 2, 4, 5, 1]
 * const result2 = stockSpan(6, [10, 4, 5, 90, 120, 80]);
 */
export function stockSpan(N, price) {
	// Implementation goes here
}
