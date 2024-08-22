import { canBeSorted } from './sort-queue-using-stack';

describe.skip('canBeSorted', () => {
	it('should return true for sortable queue', () => {
		const queue = [5, 1, 2, 3, 4];
		expect(canBeSorted(queue)).toBe(true);
	});

	it('should return false for unsortable queue', () => {
		const queue = [5, 1, 2, 6, 3, 4];
		expect(canBeSorted(queue)).toBe(false);
	});

	it('should return true for already sorted queue', () => {
		const queue = [1, 2, 3, 4, 5];
		expect(canBeSorted(queue)).toBe(true);
	});

	it('should return false for queue with all elements in reverse order', () => {
		const queue = [5, 4, 3, 2, 1];
		expect(canBeSorted(queue)).toBe(false);
	});
});
