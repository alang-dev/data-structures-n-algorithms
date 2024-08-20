import { largestRectangleArea } from './largest-rectangle-area';

describe.skip('largestRectangleArea', () => {
	test('should find the largest rectangular area in a histogram', () => {
		const input1 = [6, 2, 5, 4, 5, 1, 6];
		const expectedOutput1 = 12;
		// Explanation:
		// The largest rectangle can be formed by bars of height 5, 4, and 5.
		// The area is calculated as (smallest height) * (number of bars) = 4 * 3 = 12.
		expect(largestRectangleArea(input1)).toBe(expectedOutput1);

		const input2 = [3, 5, 1, 7, 5, 9];
		const expectedOutput2 = 15;
		// Explanation:
		// The largest rectangle can be formed by bars of height 7, 5, and 9.
		// The area is calculated as (smallest height) * (number of bars) = 5 * 3 = 15.
		expect(largestRectangleArea(input2)).toBe(expectedOutput2);
	});
});
