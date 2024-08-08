/**
 * @description
 * This function takes an array of stock prices and returns the maximum profit that can be achieved by buying on one day and selling on another future day. If no profit can be achieved, the function returns 0.
 *
 * @example
 * // Example 1
 * const prices = [7, 1, 5, 3, 6, 4];
 * const result = maxProfit(prices);
 * console.log(result); // Output: 5 (Buy on day 2, sell on day 5)
 *
 * @example
 * // Example 2
 * const prices = [7, 6, 4, 3, 1];
 * const result = maxProfit(prices);
 * console.log(result); // Output: 0 (No transactions are done)
 *
 * @param {number[]} prices - An array of stock prices where prices[i] represents the price on the ith day.
 *
 * @returns {number} The maximum profit that can be achieved from buying and selling the stock. If no profit can be achieved, returns 0.
 *
 */
export function maxProfit(prices) {
	let minPrice = prices[0];

	return prices
		.reduce((maxProfit, currentPrice) => {
			maxProfit = Math.max(maxProfit, currentPrice - minPrice);
			minPrice = Math.min(currentPrice, minPrice);
			return maxProfit;
		}, 0);
}
