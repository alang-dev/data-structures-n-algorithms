import { reverseFirstKElements } from './reverse-first-k-elements';

describe.skip('reverseFirstKElements', () => {
	it('should return [30, 20, 10, 40, 50] for the input queue = [10, 20, 30, 40, 50], k = 3', () => {
		const queue = [10, 20, 30, 40, 50];
		const k = 3;
		expect(reverseFirstKElements(queue, k)).toEqual([30, 20, 10, 40, 50]);
	});

	it('should return [5, 4, 3, 2, 1, 6, 7, 8, 9, 10] for the input queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 5', () => {
		const queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const k = 5;
		expect(reverseFirstKElements(queue, k)).toEqual([5, 4, 3, 2, 1, 6, 7, 8, 9, 10]);
	});
});
