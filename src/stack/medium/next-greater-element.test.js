import { nextGreaterElement } from './next-greater-element';

describe.skip('nextGreaterElement', () => {
	test('should find the Next Greater Element for each element in the array', () => {
		const input1 = [4, 5, 2, 25];
		const expectedOutput1 = [5, 25, 25, -1];
		// Explanation:
		// For element 4, the next greater element is 5.
		// For element 5, the next greater element is 25.
		// For element 2, the next greater element is 25.
		// For element 25, there is no greater element to its right, so the output is -1.
		expect(nextGreaterElement(input1)).toEqual(expectedOutput1);

		const input2 = [13, 7, 6, 12];
		const expectedOutput2 = [-1, 12, 12, -1];
		// Explanation:
		// For element 13, there is no greater element to its right, so the output is -1.
		// For element 7, the next greater element is 12.
		// For element 6, the next greater element is 12.
		// For element 12, there is no greater element to its right, so the output is -1.
		expect(nextGreaterElement(input2)).toEqual(expectedOutput2);
	});
});
