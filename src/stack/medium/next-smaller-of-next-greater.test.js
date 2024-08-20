import { nextSmallerOfNextGreater } from './next-smaller-of-next-greater';

describe.skip('nextSmallerOfNextGreater', () => {
	test('should find the next smaller of the next greater element for each element in the array', () => {
		const input1 = [5, 1, 9, 2, 5, 1, 7];
		const expectedOutput1 = [2, 2, -1, 1, -1, -1, -1];
		// Explanation:
		// For element 5: next greater is 9, next smaller of 9 is 2.
		// For element 1: next greater is 9, next smaller of 9 is 2.
		// For element 9: no greater element exists, so output is -1.
		// For element 2: next greater is 5, next smaller of 5 is 1.
		// For element 5: next greater is 7, next smaller of 7 is -1.
		// For element 1: next greater is 7, next smaller of 7 is -1.
		// For element 7: no greater element exists, so output is -1.
		expect(nextSmallerOfNextGreater(input1)).toEqual(expectedOutput1);

		const input2 = [4, 8, 2, 1, 9, 5, 6, 3];
		const expectedOutput2 = [2, 5, 5, 5, -1, 3, -1, -1];
		// Explanation:
		// For element 4: next greater is 8, next smaller of 8 is 2.
		// For element 8: next greater is 9, next smaller of 9 is 5.
		// For element 2: next greater is 5, next smaller of 5 is 5.
		// For element 1: next greater is 9, next smaller of 9 is 5.
		// For element 9: no greater element exists, so output is -1.
		// For element 5: next greater is 6, next smaller of 6 is 3.
		// For element 6: no greater element exists, so output is -1.
		// For element 3: no greater element exists, so output is -1.
		expect(nextSmallerOfNextGreater(input2)).toEqual(expectedOutput2);
	});
});
