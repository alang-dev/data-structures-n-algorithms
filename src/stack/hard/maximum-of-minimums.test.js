import { maximumOfMinimums } from './maximum-of-minimums';

describe.skip('maximumOfMinimums', () => {
	it('should return [70, 30, 20, 10, 10, 10, 10] for the input arr = [10, 20, 30, 50, 10, 70, 30], N = 7', () => {
		const arr = [10, 20, 30, 50, 10, 70, 30];
		const N = 7;
		expect(maximumOfMinimums(arr, N)).toEqual([70, 30, 20, 10, 10, 10, 10]);
	});
});
