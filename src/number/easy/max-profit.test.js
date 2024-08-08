import {maxProfit} from "./max-profit";

describe('maxProfit', () => {
	it('should return 5 for prices [7, 1, 5, 3, 6, 4]', () => {
		const prices = [7, 1, 5, 3, 6, 4];
		expect(maxProfit(prices)).toBe(5);
	});

	it('should return 0 for prices [7, 6, 4, 3, 1]', () => {
		const prices = [7, 6, 4, 3, 1];
		expect(maxProfit(prices)).toBe(0);
	});

	it('should return 0 for prices [1]', () => {
		const prices = [1];
		expect(maxProfit(prices)).toBe(0);
	});

	it('should return 10 for prices [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
		const prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		expect(maxProfit(prices)).toBe(9);
	});

	it('should return 0 for prices [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]', () => {
		const prices = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
		expect(maxProfit(prices)).toBe(0);
	});

	it('should handle large input sizes efficiently', () => {
		const prices = Array.from({length: 100000}, (_, i) => i);
		expect(maxProfit(prices)).toBe(99999);
	});
});
