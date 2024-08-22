import { firstNegativeInEveryWindow } from './first-negative-in-every-window';

describe.skip('firstNegativeInEveryWindow', () => {
	it('should find the first negative integer in every window of size k', () => {
		const arr = [-8, 2, 3, -6, 10];
		const k = 2;
		const result = firstNegativeInEveryWindow(arr, k);
		expect(result).toEqual([-8, 0, -6, -6]);
	});

	it('should handle windows where all elements are positive', () => {
		const arr = [1, 2, 3, 4, 5];
		const k = 3;
		const result = firstNegativeInEveryWindow(arr, k);
		expect(result).toEqual([0, 0, 0, 0]);
	});

	it('should handle windows with all negative integers', () => {
		const arr = [-1, -2, -3, -4, -5];
		const k = 2;
		const result = firstNegativeInEveryWindow(arr, k);
		expect(result).toEqual([-1, -2, -3, -4]);
	});

	it('should handle cases with mixed positive and negative integers', () => {
		const arr = [4, -1, 2, -7, 6, -3];
		const k = 3;
		const result = firstNegativeInEveryWindow(arr, k);
		expect(result).toEqual([-1, -1, -7, -7]);
	});

	it('should handle cases with only one element in the array', () => {
		const arr = [5];
		const k = 1;
		const result = firstNegativeInEveryWindow(arr, k);
		expect(result).toEqual([0]);
	});

	it('should handle cases with window size equal to the array size', () => {
		const arr = [-4, 2, 1, -7];
		const k = 4;
		const result = firstNegativeInEveryWindow(arr, k);
		expect(result).toEqual([-4]);
	});
});
