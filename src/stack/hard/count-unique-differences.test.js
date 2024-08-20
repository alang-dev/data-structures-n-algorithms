import { countUniqueDifferences } from './count-unique-differences';

describe.skip('countUniqueDifferences', () => {
	it('should return 2 for the input [5, 1, 3], N = 3', () => {
		const arr = [5, 1, 3];
		const N = 3;
		expect(countUniqueDifferences(arr, N)).toBe(2);
	});

	it('should return 4 for the input [5, 2, 3, 8], N = 4', () => {
		const arr = [5, 2, 3, 8];
		const N = 4;
		expect(countUniqueDifferences(arr, N)).toBe(4);
	});
});
