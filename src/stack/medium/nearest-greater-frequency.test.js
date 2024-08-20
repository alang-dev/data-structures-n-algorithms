import { nearestGreaterFrequency } from './nearest-greater-frequency';

/**
 * @file nearest-greater-frequency.test.js
 * @description Tests for the nearestGreaterFrequency function.
 */

describe.skip('nearestGreaterFrequency', () => {
	test('should return the correct nearest greater frequency for example 1', () => {
		const input = [1, 1, 2, 3, 4, 2, 1];
		const output = [-1, -1, 1, 2, 2, 1, -1];
		expect(nearestGreaterFrequency(input)).toEqual(output);
	});

	test('should return the correct nearest greater frequency for example 2', () => {
		const input = [1, 1, 1, 2, 2, 2, 2, 11, 3, 3];
		const output = [2, 2, 2, -1, -1, -1, -1, 3, -1, -1];
		expect(nearestGreaterFrequency(input)).toEqual(output);
	});

	// Add more tests here if needed
});
