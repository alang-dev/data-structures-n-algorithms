import { maxLRProduct } from './max-lr-product';

/**
 * @file max-lr-product.test.js
 * @description Tests for the maxLRProduct function.
 */

describe.skip('maxLRProduct', () => {
	test('should return the correct max LRProduct for example 1', () => {
		const input = [1, 1, 1, 1, 0, 1, 1, 1, 1, 1];
		const output = 24;
		expect(maxLRProduct(input)).toBe(output);
	});

	test('should return the correct max LRProduct for example 2', () => {
		const input = [5, 4, 3, 4, 5];
		const output = 8;
		expect(maxLRProduct(input)).toBe(output);
	});

	// Add more tests here if needed
});
