import { reverseStack } from './reverse-stack';

/**
 * @file reverse-stack.test.js
 * @description Tests for the reverseStack function.
 */

describe.skip('reverseStack', () => {
	test('should return the correct reversed stack for example 1', () => {
		const input = [1, 2, 3, 4];
		const output = [4, 3, 2, 1];
		expect(reverseStack(input)).toEqual(output);
	});

	test('should return the correct reversed stack for example 2', () => {
		const input = [6, 5, 4];
		const output = [4, 5, 6];
		expect(reverseStack(input)).toEqual(output);
	});

	// Add more tests here if needed
});
