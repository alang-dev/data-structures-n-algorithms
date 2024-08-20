import { sortStack } from './sort-stack';

/**
 * @file sort-stack.test.js
 * @description Tests for the sortStack function.
 */

describe.skip('sortStack', () => {
	test('should return the correct sorted stack for example 1', () => {
		const input = [34, 3, 31, 98, 92, 23];
		const output = [3, 23, 31, 34, 92, 98];
		expect(sortStack(input)).toEqual(output);
	});

	test('should return the correct sorted stack for example 2', () => {
		const input = [3, 5, 1, 4, 2, 8];
		const output = [1, 2, 3, 4, 5, 8];
		expect(sortStack(input)).toEqual(output);
	});

	// Add more tests here if needed
});
